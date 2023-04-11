import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata } from "./googlecloudcontactcenterinsightsv1analysisresultcallanalysismetadata";
/**
 * The result of an analysis.
 */
export declare class GoogleCloudContactcenterinsightsV1AnalysisResult extends SpeakeasyBase {
    /**
     * Call-specific metadata created during analysis.
     */
    callAnalysisMetadata?: GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata;
    /**
     * The time at which the analysis ended.
     */
    endTime?: string;
}
