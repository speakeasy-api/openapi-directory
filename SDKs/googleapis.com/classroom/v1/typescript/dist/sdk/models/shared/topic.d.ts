import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Topic created by a teacher for the course
 */
export declare class Topic extends SpeakeasyBase {
    /**
     * Identifier of the course. Read-only.
     */
    courseId?: string;
    /**
     * The name of the topic, generated by the user. Leading and trailing whitespaces, if any, are trimmed. Also, multiple consecutive whitespaces are collapsed into one inside the name. The result must be a non-empty string. Topic names are case sensitive, and must be no longer than 100 characters.
     */
    name?: string;
    /**
     * Unique identifier for the topic. Read-only.
     */
    topicId?: string;
    /**
     * The time the topic was last updated by the system. Read-only.
     */
    updateTime?: string;
}
