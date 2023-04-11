import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AnswerRecord } from "./googleclouddialogflowv2beta1answerrecord";
/**
 * Response message for AnswerRecords.ListAnswerRecords.
 */
export declare class GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse extends SpeakeasyBase {
    /**
     * The list of answer records.
     */
    answerRecords?: GoogleCloudDialogflowV2beta1AnswerRecord[];
    /**
     * A token to retrieve next page of results. Or empty if there are no more results. Pass this value in the ListAnswerRecordsRequest.page_token field in the subsequent call to `ListAnswerRecords` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
