import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataQualityRule } from "./googleclouddataplexv1dataqualityrule";
/**
 * DataQualityScan related setting.
 */
export declare class GoogleCloudDataplexV1DataQualitySpec extends SpeakeasyBase {
    /**
     * The list of rules to evaluate against a data source. At least one rule is required.
     */
    rules?: GoogleCloudDataplexV1DataQualityRule[];
}
