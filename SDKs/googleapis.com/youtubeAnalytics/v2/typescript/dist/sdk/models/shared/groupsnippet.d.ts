import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A group snippet.
 */
export declare class GroupSnippet extends SpeakeasyBase {
    /**
     * The date and time that the group was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
     */
    publishedAt?: string;
    /**
     * The group name. The value must be a non-empty string.
     */
    title?: string;
}
