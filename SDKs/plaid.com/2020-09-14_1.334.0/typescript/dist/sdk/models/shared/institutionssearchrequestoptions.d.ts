import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional object to filter `/institutions/search` results.
 */
export declare class InstitutionsSearchRequestOptions extends SpeakeasyBase {
    /**
     * When `true`, returns metadata related to the Auth product indicating which auth methods are supported.
     */
    includeAuthMetadata?: boolean;
    /**
     * When true, return the institution's homepage URL, logo and primary brand color.
     */
    includeOptionalMetadata?: boolean;
    /**
     * When `true`, returns metadata related to the Payment Initiation product indicating which payment configurations are supported.
     */
    includePaymentInitiationMetadata?: boolean;
    /**
     * Limit results to institutions with or without mandatory OAuth login flows. Note that institutions will only have `oauth` set to `true` if *all* Items associated with that institution are required to use OAuth flows; institutions in a state of migration to OAuth may have the `oauth` attribute set to `false` even if they support OAuth.
     */
    oauth?: boolean;
    /**
     * Additional options that will be used to filter institutions by various Payment Initiation configurations.
     */
    paymentInitiation?: Record<string, any>;
}
