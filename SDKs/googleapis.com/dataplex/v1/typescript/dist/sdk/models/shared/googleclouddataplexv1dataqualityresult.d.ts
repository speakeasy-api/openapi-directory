import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataQualityDimensionResult } from "./googleclouddataplexv1dataqualitydimensionresult";
import { GoogleCloudDataplexV1DataQualityRuleResult } from "./googleclouddataplexv1dataqualityruleresult";
import { GoogleCloudDataplexV1ScannedData } from "./googleclouddataplexv1scanneddata";
/**
 * The output of a DataQualityScan.
 */
export declare class GoogleCloudDataplexV1DataQualityResult extends SpeakeasyBase {
    /**
     * A list of results at the dimension level.
     */
    dimensions?: GoogleCloudDataplexV1DataQualityDimensionResult[];
    /**
     * Overall data quality result -- true if all rules passed.
     */
    passed?: boolean;
    /**
     * The count of rows processed.
     */
    rowCount?: string;
    /**
     * A list of all the rules in a job, and their results.
     */
    rules?: GoogleCloudDataplexV1DataQualityRuleResult[];
    /**
     * The data scanned during processing (e.g. in incremental DataScan)
     */
    scannedData?: GoogleCloudDataplexV1ScannedData;
}
