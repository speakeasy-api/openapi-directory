import { SpeakeasyBase } from "../../../internal/utils";
import { TagValue } from "./tagvalue";
/**
 * The ListTagValues response.
 */
export declare class ListTagValuesResponse extends SpeakeasyBase {
    /**
     * A pagination token returned from a previous call to `ListTagValues` that indicates from where listing should continue. This is currently not used, but the server may at any point start supplying a valid token.
     */
    nextPageToken?: string;
    /**
     * A possibly paginated list of TagValues that are direct descendants of the specified parent TagKey.
     */
    tagValues?: TagValue[];
}
