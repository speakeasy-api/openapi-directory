import { SpeakeasyBase } from "../../../internal/utils";
import { QueryContent } from "./querycontent";
/**
 * A saved query which can be shared with others or used later.
 */
export declare class SavedQueryInput extends SpeakeasyBase {
    /**
     * The query content.
     */
    content?: QueryContent;
    /**
     * The description of this saved query. This value should be fewer than 255 characters.
     */
    description?: string;
    /**
     * Labels applied on the resource. This value should not contain more than 10 entries. The key and value of each entry must be non-empty and fewer than 64 characters.
     */
    labels?: Record<string, string>;
    /**
     * The resource name of the saved query. The format must be: * projects/project_number/savedQueries/saved_query_id * folders/folder_number/savedQueries/saved_query_id * organizations/organization_number/savedQueries/saved_query_id
     */
    name?: string;
}
/**
 * A saved query which can be shared with others or used later.
 */
export declare class SavedQuery extends SpeakeasyBase {
    /**
     * The query content.
     */
    content?: QueryContent;
    /**
     * Output only. The create time of this saved query.
     */
    createTime?: string;
    /**
     * Output only. The account's email address who has created this saved query.
     */
    creator?: string;
    /**
     * The description of this saved query. This value should be fewer than 255 characters.
     */
    description?: string;
    /**
     * Labels applied on the resource. This value should not contain more than 10 entries. The key and value of each entry must be non-empty and fewer than 64 characters.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The last update time of this saved query.
     */
    lastUpdateTime?: string;
    /**
     * Output only. The account's email address who has updated this saved query most recently.
     */
    lastUpdater?: string;
    /**
     * The resource name of the saved query. The format must be: * projects/project_number/savedQueries/saved_query_id * folders/folder_number/savedQueries/saved_query_id * organizations/organization_number/savedQueries/saved_query_id
     */
    name?: string;
}
