import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1CloudIdentityInfo, GoogleCloudChannelV1CloudIdentityInfoInput } from "./googlecloudchannelv1cloudidentityinfo";
import { GoogleCloudChannelV1ContactInfo, GoogleCloudChannelV1ContactInfoInput } from "./googlecloudchannelv1contactinfo";
import { GoogleTypePostalAddress } from "./googletypepostaladdress";
/**
 * Entity representing a customer of a reseller or distributor.
 */
export declare class GoogleCloudChannelV1Customer extends SpeakeasyBase {
    /**
     * Secondary contact email. You need to provide an alternate email to create different domains if a primary contact email already exists. Users will receive a notification with credentials when you create an admin.google.com account. Secondary emails are also recovery email addresses. Alternate emails are optional when you create Team customers.
     */
    alternateEmail?: string;
    /**
     * Cloud Identity ID of the customer's channel partner. Populated only if a channel partner exists for this customer.
     */
    channelPartnerId?: string;
    /**
     * Output only. The customer's Cloud Identity ID if the customer has a Cloud Identity resource.
     */
    cloudIdentityId?: string;
    /**
     * Cloud Identity information for the Cloud Channel Customer.
     */
    cloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfo;
    /**
     * Optional. External CRM ID for the customer. Populated only if a CRM ID exists for this customer.
     */
    correlationId?: string;
    /**
     * Output only. Time when the customer was created.
     */
    createTime?: string;
    /**
     * Required. The customer's primary domain. Must match the primary contact email's domain.
     */
    domain?: string;
    /**
     * Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string;
    /**
     * Output only. Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id}
     */
    name?: string;
    /**
     * Required. Name of the organization that the customer entity represents.
     */
    orgDisplayName?: string;
    /**
     * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
     */
    orgPostalAddress?: GoogleTypePostalAddress;
    /**
     * Contact information for a customer account.
     */
    primaryContactInfo?: GoogleCloudChannelV1ContactInfo;
    /**
     * Output only. Time when the customer was updated.
     */
    updateTime?: string;
}
/**
 * Entity representing a customer of a reseller or distributor.
 */
export declare class GoogleCloudChannelV1CustomerInput extends SpeakeasyBase {
    /**
     * Secondary contact email. You need to provide an alternate email to create different domains if a primary contact email already exists. Users will receive a notification with credentials when you create an admin.google.com account. Secondary emails are also recovery email addresses. Alternate emails are optional when you create Team customers.
     */
    alternateEmail?: string;
    /**
     * Cloud Identity ID of the customer's channel partner. Populated only if a channel partner exists for this customer.
     */
    channelPartnerId?: string;
    /**
     * Cloud Identity information for the Cloud Channel Customer.
     */
    cloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfoInput;
    /**
     * Optional. External CRM ID for the customer. Populated only if a CRM ID exists for this customer.
     */
    correlationId?: string;
    /**
     * Required. The customer's primary domain. Must match the primary contact email's domain.
     */
    domain?: string;
    /**
     * Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string;
    /**
     * Required. Name of the organization that the customer entity represents.
     */
    orgDisplayName?: string;
    /**
     * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
     */
    orgPostalAddress?: GoogleTypePostalAddress;
    /**
     * Contact information for a customer account.
     */
    primaryContactInfo?: GoogleCloudChannelV1ContactInfoInput;
}
