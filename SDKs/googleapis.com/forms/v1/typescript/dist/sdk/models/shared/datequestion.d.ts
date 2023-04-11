import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A date question. Date questions default to just month + day.
 */
export declare class DateQuestion extends SpeakeasyBase {
    /**
     * Whether to include the time as part of the question.
     */
    includeTime?: boolean;
    /**
     * Whether to include the year as part of the question.
     */
    includeYear?: boolean;
}
