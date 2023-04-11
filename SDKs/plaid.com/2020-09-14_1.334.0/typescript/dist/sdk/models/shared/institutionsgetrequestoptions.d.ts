import { SpeakeasyBase } from "../../../internal/utils";
import { ProductsEnum } from "./productsenum";
/**
 * An optional object to filter `/institutions/get` results.
 */
export declare class InstitutionsGetRequestOptions extends SpeakeasyBase {
    /**
     * When `true`, returns metadata related to the Auth product indicating which auth methods are supported.
     */
    includeAuthMetadata?: boolean;
    /**
     * When `true`, return the institution's homepage URL, logo and primary brand color.
     *
     * @remarks
     *
     * Note that Plaid does not own any of the logos shared by the API, and that by accessing or using these logos, you agree that you are doing so at your own risk and will, if necessary, obtain all required permissions from the appropriate rights holders and adhere to any applicable usage guidelines. Plaid disclaims all express or implied warranties with respect to the logos.
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
     * Filter the Institutions based on which products they support.
     */
    products?: ProductsEnum[];
    /**
     * Specify an array of routing numbers to filter institutions. The response will only return institutions that match all of the routing numbers in the array. Routing number records used for this matching are not comprehensive; failure to match a given routing number to an institution does not mean that the institution is unsupported by Plaid.
     */
    routingNumbers?: string[];
}
