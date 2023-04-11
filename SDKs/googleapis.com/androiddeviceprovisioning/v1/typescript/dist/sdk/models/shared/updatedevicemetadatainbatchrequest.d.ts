import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateMetadataArguments } from "./updatemetadataarguments";
/**
 * Request to update device metadata in batch.
 */
export declare class UpdateDeviceMetadataInBatchRequest extends SpeakeasyBase {
    /**
     * Required. The list of metadata updates.
     */
    updates?: UpdateMetadataArguments[];
}
