import { SpeakeasyBase } from "../../../internal/utils";
import { MemcacheParametersInput } from "./memcacheparameters";
/**
 * Request for UpdateParameters.
 */
export declare class UpdateParametersRequestInput extends SpeakeasyBase {
    parameters?: MemcacheParametersInput;
    /**
     * Required. Mask of fields to update.
     */
    updateMask?: string;
}
