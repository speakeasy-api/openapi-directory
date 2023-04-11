import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1AnalysisResult } from "./googlecloudcontactcenterinsightsv1analysisresult";
import { GoogleCloudContactcenterinsightsV1AnnotatorSelector } from "./googlecloudcontactcenterinsightsv1annotatorselector";
/**
 * The analysis resource.
 */
export declare class GoogleCloudContactcenterinsightsV1Analysis extends SpeakeasyBase {
    /**
     * The result of an analysis.
     */
    analysisResult?: GoogleCloudContactcenterinsightsV1AnalysisResult;
    /**
     * Selector of all available annotators and phrase matchers to run.
     */
    annotatorSelector?: GoogleCloudContactcenterinsightsV1AnnotatorSelector;
    /**
     * Output only. The time at which the analysis was created, which occurs when the long-running operation completes.
     */
    createTime?: string;
    /**
     * Immutable. The resource name of the analysis. Format: projects/{project}/locations/{location}/conversations/{conversation}/analyses/{analysis}
     */
    name?: string;
    /**
     * Output only. The time at which the analysis was requested.
     */
    requestTime?: string;
}
/**
 * The analysis resource.
 */
export declare class GoogleCloudContactcenterinsightsV1AnalysisInput extends SpeakeasyBase {
    /**
     * The result of an analysis.
     */
    analysisResult?: GoogleCloudContactcenterinsightsV1AnalysisResult;
    /**
     * Selector of all available annotators and phrase matchers to run.
     */
    annotatorSelector?: GoogleCloudContactcenterinsightsV1AnnotatorSelector;
    /**
     * Immutable. The resource name of the analysis. Format: projects/{project}/locations/{location}/conversations/{conversation}/analyses/{analysis}
     */
    name?: string;
}
