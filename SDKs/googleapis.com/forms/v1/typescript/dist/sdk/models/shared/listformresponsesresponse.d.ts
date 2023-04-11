import { SpeakeasyBase } from "../../../internal/utils";
import { FormResponse } from "./formresponse";
/**
 * Response to a ListFormResponsesRequest.
 */
export declare class ListFormResponsesResponse extends SpeakeasyBase {
    /**
     * If set, there are more responses. To get the next page of responses, provide this as `page_token` in a future request.
     */
    nextPageToken?: string;
    /**
     * The returned form responses. Note: The `formId` field is not returned in the `FormResponse` object for list requests.
     */
    responses?: FormResponse[];
}
