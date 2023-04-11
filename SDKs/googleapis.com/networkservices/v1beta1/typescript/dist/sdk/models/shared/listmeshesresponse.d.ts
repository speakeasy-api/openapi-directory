import { SpeakeasyBase } from "../../../internal/utils";
import { Mesh } from "./mesh";
/**
 * Response returned by the ListMeshes method.
 */
export declare class ListMeshesResponse extends SpeakeasyBase {
    /**
     * List of Mesh resources.
     */
    meshes?: Mesh[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string;
}
