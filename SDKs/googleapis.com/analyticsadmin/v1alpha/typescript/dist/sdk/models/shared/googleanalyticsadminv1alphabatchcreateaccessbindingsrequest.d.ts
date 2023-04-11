import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestInput } from "./googleanalyticsadminv1alphacreateaccessbindingrequest";
/**
 * Request message for BatchCreateAccessBindings RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaBatchCreateAccessBindingsRequestInput extends SpeakeasyBase {
    /**
     * Required. The requests specifying the access bindings to create. A maximum of 1000 access bindings can be created in a batch.
     */
    requests?: GoogleAnalyticsAdminV1alphaCreateAccessBindingRequestInput[];
}
