import { SpeakeasyBase } from "../../../internal/utils";
import { ImageVersion } from "./imageversion";
/**
 * The ImageVersions in a project and location.
 */
export declare class ListImageVersionsResponse extends SpeakeasyBase {
    /**
     * The list of supported ImageVersions in a location.
     */
    imageVersions?: ImageVersion[];
    /**
     * The page token used to query for the next page if one exists.
     */
    nextPageToken?: string;
}
