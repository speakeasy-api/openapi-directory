import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1AnalysisResult } from "./googlecloudcontactcenterinsightsv1analysisresult";
import { GoogleCloudContactcenterinsightsV1AnnotatorSelector } from "./googlecloudcontactcenterinsightsv1annotatorselector";
/**
 * The analysis resource.
**/
export declare class GoogleCloudContactcenterinsightsV1Analysis extends SpeakeasyBase {
    analysisResult?: GoogleCloudContactcenterinsightsV1AnalysisResult;
    annotatorSelector?: GoogleCloudContactcenterinsightsV1AnnotatorSelector;
    createTime?: string;
    name?: string;
    requestTime?: string;
}
/**
 * The analysis resource.
**/
export declare class GoogleCloudContactcenterinsightsV1AnalysisInput extends SpeakeasyBase {
    analysisResult?: GoogleCloudContactcenterinsightsV1AnalysisResult;
    annotatorSelector?: GoogleCloudContactcenterinsightsV1AnnotatorSelector;
    name?: string;
}
