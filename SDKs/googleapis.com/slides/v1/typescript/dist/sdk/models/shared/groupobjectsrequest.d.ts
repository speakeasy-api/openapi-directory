import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Groups objects to create an object group. For example, groups PageElements to create a Group on the same page as all the children.
 */
export declare class GroupObjectsRequest extends SpeakeasyBase {
    /**
     * The object IDs of the objects to group. Only page elements can be grouped. There should be at least two page elements on the same page that are not already in another group. Some page elements, such as videos, tables and placeholders cannot be grouped.
     */
    childrenObjectIds?: string[];
    /**
     * A user-supplied object ID for the group to be created. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated.
     */
    groupObjectId?: string;
}
