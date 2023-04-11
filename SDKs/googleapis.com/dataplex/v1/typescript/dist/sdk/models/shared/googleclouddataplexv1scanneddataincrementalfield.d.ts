import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A data range denoted by a pair of start/end values of a field.
 */
export declare class GoogleCloudDataplexV1ScannedDataIncrementalField extends SpeakeasyBase {
    /**
     * Value that marks the end of the range.
     */
    end?: string;
    /**
     * The field that contains values which monotonically increases over time (e.g. a timestamp column).
     */
    field?: string;
    /**
     * Value that marks the start of the range.
     */
    start?: string;
}
