import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Action details for invalid or unsupported data files detected by discovery.
 */
export declare class GoogleCloudDataplexV1ActionInvalidDataFormat extends SpeakeasyBase {
    /**
     * The expected data format of the entity.
     */
    expectedFormat?: string;
    /**
     * The new unexpected data format within the entity.
     */
    newFormat?: string;
    /**
     * The list of data locations sampled and used for format/schema inference.
     */
    sampledDataLocations?: string[];
}
