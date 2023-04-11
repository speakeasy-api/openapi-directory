import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessBinding } from "./googleanalyticsadminv1alphaaccessbinding";
/**
 * Response message for BatchUpdateAccessBindings RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsResponse extends SpeakeasyBase {
    /**
     * The access bindings updated.
     */
    accessBindings?: GoogleAnalyticsAdminV1alphaAccessBinding[];
}
