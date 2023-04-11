import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleWorkspaceAccount, GoogleWorkspaceAccountInput } from "./googleworkspaceaccount";
/**
 * Output only. Whether any user from the company has accepted the latest Terms of Service (ToS). See TermsStatus.
 */
export declare enum CompanyTermsStatusEnum {
    TermsStatusUnspecified = "TERMS_STATUS_UNSPECIFIED",
    TermsStatusNotAccepted = "TERMS_STATUS_NOT_ACCEPTED",
    TermsStatusAccepted = "TERMS_STATUS_ACCEPTED",
    TermsStatusStale = "TERMS_STATUS_STALE"
}
/**
 * A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
 */
export declare class Company extends SpeakeasyBase {
    /**
     * Optional. Email address of customer's users in the admin role. Each email address must be associated with a Google Account.
     */
    adminEmails?: string[];
    /**
     * Output only. The ID of the company. Assigned by the server.
     */
    companyId?: string;
    /**
     * Required. The name of the company. For example _XYZ Corp_. Displayed to the company's employees in the zero-touch enrollment portal.
     */
    companyName?: string;
    /**
     * A Google Workspace customer.
     */
    googleWorkspaceAccount?: GoogleWorkspaceAccount;
    /**
     * Input only. The preferred locale of the customer represented as a BCP47 language code. This field is validated on input and requests containing unsupported language codes will be rejected. Supported language codes: Arabic (ar) Chinese (Hong Kong) (zh-HK) Chinese (Simplified) (zh-CN) Chinese (Traditional) (zh-TW) Czech (cs) Danish (da) Dutch (nl) English (UK) (en-GB) English (US) (en-US) Filipino (fil) Finnish (fi) French (fr) German (de) Hebrew (iw) Hindi (hi) Hungarian (hu) Indonesian (id) Italian (it) Japanese (ja) Korean (ko) Norwegian (Bokmal) (no) Polish (pl) Portuguese (Brazil) (pt-BR) Portuguese (Portugal) (pt-PT) Russian (ru) Spanish (es) Spanish (Latin America) (es-419) Swedish (sv) Thai (th) Turkish (tr) Ukrainian (uk) Vietnamese (vi)
     */
    languageCode?: string;
    /**
     * Output only. The API resource name of the company. The resource name is one of the following formats: * `partners/[PARTNER_ID]/customers/[CUSTOMER_ID]` * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]` * `partners/[PARTNER_ID]/vendors/[VENDOR_ID]/customers/[CUSTOMER_ID]` Assigned by the server.
     */
    name?: string;
    /**
     * Required. Input only. Email address of customer's users in the owner role. At least one `owner_email` is required. Owners share the same access as admins but can also add, delete, and edit your organization's portal users.
     */
    ownerEmails?: string[];
    /**
     * Input only. If set to true, welcome email will not be sent to the customer. It is recommended to skip the welcome email if devices will be claimed with additional DEVICE_PROTECTION service, as the customer will receive separate emails at device claim time. This field is ignored if this is not a Zero-touch customer.
     */
    skipWelcomeEmail?: boolean;
    /**
     * Output only. Whether any user from the company has accepted the latest Terms of Service (ToS). See TermsStatus.
     */
    termsStatus?: CompanyTermsStatusEnum;
}
/**
 * A reseller, vendor, or customer in the zero-touch reseller and customer APIs.
 */
export declare class CompanyInput extends SpeakeasyBase {
    /**
     * Optional. Email address of customer's users in the admin role. Each email address must be associated with a Google Account.
     */
    adminEmails?: string[];
    /**
     * Required. The name of the company. For example _XYZ Corp_. Displayed to the company's employees in the zero-touch enrollment portal.
     */
    companyName?: string;
    /**
     * A Google Workspace customer.
     */
    googleWorkspaceAccount?: GoogleWorkspaceAccountInput;
    /**
     * Input only. The preferred locale of the customer represented as a BCP47 language code. This field is validated on input and requests containing unsupported language codes will be rejected. Supported language codes: Arabic (ar) Chinese (Hong Kong) (zh-HK) Chinese (Simplified) (zh-CN) Chinese (Traditional) (zh-TW) Czech (cs) Danish (da) Dutch (nl) English (UK) (en-GB) English (US) (en-US) Filipino (fil) Finnish (fi) French (fr) German (de) Hebrew (iw) Hindi (hi) Hungarian (hu) Indonesian (id) Italian (it) Japanese (ja) Korean (ko) Norwegian (Bokmal) (no) Polish (pl) Portuguese (Brazil) (pt-BR) Portuguese (Portugal) (pt-PT) Russian (ru) Spanish (es) Spanish (Latin America) (es-419) Swedish (sv) Thai (th) Turkish (tr) Ukrainian (uk) Vietnamese (vi)
     */
    languageCode?: string;
    /**
     * Required. Input only. Email address of customer's users in the owner role. At least one `owner_email` is required. Owners share the same access as admins but can also add, delete, and edit your organization's portal users.
     */
    ownerEmails?: string[];
    /**
     * Input only. If set to true, welcome email will not be sent to the customer. It is recommended to skip the welcome email if devices will be claimed with additional DEVICE_PROTECTION service, as the customer will receive separate emails at device claim time. This field is ignored if this is not a Zero-touch customer.
     */
    skipWelcomeEmail?: boolean;
}
