import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1ScannedDataIncrementalField } from "./googleclouddataplexv1scanneddataincrementalfield";
/**
 * The data scanned during processing (e.g. in incremental DataScan)
 */
export declare class GoogleCloudDataplexV1ScannedData extends SpeakeasyBase {
    /**
     * A data range denoted by a pair of start/end values of a field.
     */
    incrementalField?: GoogleCloudDataplexV1ScannedDataIncrementalField;
}
