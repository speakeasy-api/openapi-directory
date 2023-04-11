import { SpeakeasyBase } from "../../../internal/utils";
import { Question } from "./question";
/**
 * Response message for QuestionsAndAnswers.ListQuestions
 */
export declare class ListQuestionsResponse extends SpeakeasyBase {
    /**
     * If the number of questions exceeds the requested max page size, this field is populated with a token to fetch the next page of questions on a subsequent call. If there are no more questions, this field is not present in the response.
     */
    nextPageToken?: string;
    /**
     * The requested questions,
     */
    questions?: Question[];
    /**
     * The total number of questions posted for this location across all pages.
     */
    totalSize?: number;
}
