import { SpeakeasyBase } from "../../../internal/utils";
import { GcsOutputDestination } from "./gcsoutputdestination";
/**
 * Output configuration for datasets.
 */
export declare class DatasetOutputConfig extends SpeakeasyBase {
    /**
     * The Google Cloud Storage location for the output content.
     */
    gcsDestination?: GcsOutputDestination;
}
