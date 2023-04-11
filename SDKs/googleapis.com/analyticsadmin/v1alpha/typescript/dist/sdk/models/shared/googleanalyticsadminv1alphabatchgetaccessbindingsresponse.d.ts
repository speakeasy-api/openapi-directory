import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessBinding } from "./googleanalyticsadminv1alphaaccessbinding";
/**
 * Response message for BatchGetAccessBindings RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaBatchGetAccessBindingsResponse extends SpeakeasyBase {
    /**
     * The requested access bindings.
     */
    accessBindings?: GoogleAnalyticsAdminV1alphaAccessBinding[];
}
