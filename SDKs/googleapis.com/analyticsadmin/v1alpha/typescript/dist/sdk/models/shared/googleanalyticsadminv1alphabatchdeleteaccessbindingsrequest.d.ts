import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest } from "./googleanalyticsadminv1alphadeleteaccessbindingrequest";
/**
 * Request message for BatchDeleteAccessBindings RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaBatchDeleteAccessBindingsRequest extends SpeakeasyBase {
    /**
     * Required. The requests specifying the access bindings to delete. A maximum of 1000 access bindings can be deleted in a batch.
     */
    requests?: GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest[];
}
