import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessBinding } from "./googleanalyticsadminv1alphaaccessbinding";
/**
 * Response message for BatchCreateAccessBindings RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsResponse extends SpeakeasyBase {
    /**
     * The access bindings created.
     */
    accessBindings?: GoogleAnalyticsAdminV1alphaAccessBinding[];
}
