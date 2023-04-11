import { SpeakeasyBase } from "../../../internal/utils";
import { Answer } from "./answer";
/**
 * Response message for QuestionsAndAnswers.ListAnswers
 */
export declare class ListAnswersResponse extends SpeakeasyBase {
    /**
     * The requested answers.
     */
    answers?: Answer[];
    /**
     * If the number of answers exceeds the requested max page size, this field is populated with a token to fetch the next page of answers on a subsequent call. If there are no more answers, this field is not present in the response.
     */
    nextPageToken?: string;
    /**
     * The total number of answers posted for this question across all pages.
     */
    totalSize?: number;
}
