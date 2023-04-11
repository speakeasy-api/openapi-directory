import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1AnnotatorSelector } from "./googlecloudcontactcenterinsightsv1annotatorselector";
/**
 * The request to analyze conversations in bulk.
 */
export declare class GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest extends SpeakeasyBase {
    /**
     * Required. Percentage of selected conversation to analyze, between [0, 100].
     */
    analysisPercentage?: number;
    /**
     * Selector of all available annotators and phrase matchers to run.
     */
    annotatorSelector?: GoogleCloudContactcenterinsightsV1AnnotatorSelector;
    /**
     * Required. Filter used to select the subset of conversations to analyze.
     */
    filter?: string;
    /**
     * Required. The parent resource to create analyses in.
     */
    parent?: string;
}
