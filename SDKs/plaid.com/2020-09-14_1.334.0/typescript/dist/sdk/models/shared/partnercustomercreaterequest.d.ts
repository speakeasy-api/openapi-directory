import { SpeakeasyBase } from "../../../internal/utils";
import { ProductsEnum } from "./productsenum";
/**
 * Request schema for `/partner/customer/create`.
 */
export declare class PartnerCustomerCreateRequest extends SpeakeasyBase {
    /**
     * The end customer's address.
     */
    address: Record<string, any>;
    /**
     * The name of the end customer's application. This will be shown to end users when they go through the Plaid Link flow.
     */
    applicationName: string;
    /**
     * Assets under management for the given end customer. Required for end customers with monthly service commitments.
     */
    assetsUnderManagement?: Record<string, any>;
    /**
     * The billing contact for the end customer. Defaults to partner's technical contact if omitted.
     */
    billingContact?: Record<string, any>;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The company name of the end customer being created. This will be used to display the end customer in the Plaid Dashboard. It will not be shown to end users.
     */
    companyName: string;
    /**
     * If `true`, the end customer's default Link customization will be set to match the partner's. You can always change the end customer's Link customization in the Plaid Dashboard. See the [Link Customization docs](https://plaid.com/docs/link/customization/) for more information.
     */
    createLinkCustomization?: boolean;
    /**
     * This information is public. Users of your app will see this information when managing connections between your app and their bank accounts in Plaid Portal. Defaults to partner's customer support info if omitted.
     */
    customerSupportInfo?: Record<string, any>;
    /**
     * Denotes whether the partner has forwarded the Plaid bank addendum to the end customer.
     */
    isBankAddendumCompleted: boolean;
    /**
     * Denotes whether or not the partner has completed attestation of diligence for the end customer to be created.
     */
    isDiligenceAttested: boolean;
    /**
     * The end customer's legal name. This will be shared with financial institutions as part of the OAuth registration process. It will not be shown to end users.
     */
    legalEntityName: string;
    /**
     * Base64-encoded representation of the end customer's logo. Must be a PNG of size 1024x1024 under 4MB. The logo will be shared with financial institutions and shown to the end user during Link flows. A logo is required if `create_link_customization` is `true`. If `create_link_customization` is `false` and the logo is omitted, a stock logo will be used.
     */
    logo?: string;
    /**
     * The products to be enabled for the end customer.
     */
    products: ProductsEnum[];
    /**
     * A list of URIs indicating the destination(s) where a user can be forwarded after completing the Link flow; used to support OAuth authentication flows when launching Link in the browser or via a webview. URIs should not contain any query parameters. When used in Production or Development, URIs must use https. To specify any subdomain, use `*` as a wildcard character, e.g. `https://*.example.com/oauth.html`. To modify redirect URIs for an end customer after creating them, go to the end customer's [API page](https://dashboard.plaid.com/team/api) in the Dashboard.
     */
    redirectUris?: string[];
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The technical contact for the end customer. Defaults to partner's technical contact if omitted.
     */
    technicalContact?: Record<string, any>;
    /**
     * The end customer's website.
     */
    website: string;
}
