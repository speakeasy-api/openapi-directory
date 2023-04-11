import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequestInput } from "./googleanalyticsadminv1alphaupdateaccessbindingrequest";
/**
 * Request message for BatchUpdateAccessBindings RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaBatchUpdateAccessBindingsRequestInput extends SpeakeasyBase {
    /**
     * Required. The requests specifying the access bindings to update. A maximum of 1000 access bindings can be updated in a batch.
     */
    requests?: GoogleAnalyticsAdminV1alphaUpdateAccessBindingRequestInput[];
}
