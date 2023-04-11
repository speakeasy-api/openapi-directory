import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1Evaluation } from "./googleclouddocumentaiv1evaluation";
/**
 * The response from ListEvaluations.
 */
export declare class GoogleCloudDocumentaiV1ListEvaluationsResponse extends SpeakeasyBase {
    /**
     * The evaluations requested.
     */
    evaluations?: GoogleCloudDocumentaiV1Evaluation[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
