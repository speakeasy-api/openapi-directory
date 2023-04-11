import { SpeakeasyBase } from "../../../internal/utils";
import { VideoCategorySnippet } from "./videocategorysnippet";
/**
 * A *videoCategory* resource identifies a category that has been or could be associated with uploaded videos.
 */
export declare class VideoCategory extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube uses to uniquely identify the video category.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategory".
     */
    kind?: string;
    /**
     * Basic details about a video category, such as its localized title.
     */
    snippet?: VideoCategorySnippet;
}
