import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1AnnotatorSelector } from "./googlecloudcontactcenterinsightsv1annotatorselector";
/**
 * The request to analyze conversations in bulk.
**/
export declare class GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest extends SpeakeasyBase {
    analysisPercentage?: number;
    annotatorSelector?: GoogleCloudContactcenterinsightsV1AnnotatorSelector;
    filter?: string;
    parent?: string;
}
