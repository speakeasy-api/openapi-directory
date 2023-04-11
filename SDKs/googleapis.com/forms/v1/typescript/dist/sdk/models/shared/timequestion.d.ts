import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A time question.
 */
export declare class TimeQuestion extends SpeakeasyBase {
    /**
     * `true` if the question is about an elapsed time. Otherwise it is about a time of day.
     */
    duration?: boolean;
}
