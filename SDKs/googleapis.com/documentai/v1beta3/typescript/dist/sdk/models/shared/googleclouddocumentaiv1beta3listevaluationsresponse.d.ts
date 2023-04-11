import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3Evaluation } from "./googleclouddocumentaiv1beta3evaluation";
/**
 * The response from ListEvaluations.
 */
export declare class GoogleCloudDocumentaiV1beta3ListEvaluationsResponse extends SpeakeasyBase {
    /**
     * The evaluations requested.
     */
    evaluations?: GoogleCloudDocumentaiV1beta3Evaluation[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
