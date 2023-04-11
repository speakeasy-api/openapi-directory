import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describe JSON data format.
 */
export declare class GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions extends SpeakeasyBase {
    /**
     * Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).
     */
    disableTypeInference?: boolean;
    /**
     * Optional. The character encoding of the data. The default is UTF-8.
     */
    encoding?: string;
}
