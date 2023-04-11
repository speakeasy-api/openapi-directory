import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for AddControl method.
 */
export declare class GoogleCloudRetailV2AddControlRequest extends SpeakeasyBase {
    /**
     * Required. The id of the control to apply. Assumed to be in the same catalog as the serving config - if id is not found a NOT_FOUND error is returned.
     */
    controlId?: string;
}
