import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for DeleteAccessBinding RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaDeleteAccessBindingRequest extends SpeakeasyBase {
    /**
     * Required. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding}
     */
    name?: string;
}
