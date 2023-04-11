import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A resource id is a generic reference that points to another YouTube resource.
 */
export declare class ResourceId extends SpeakeasyBase {
    /**
     * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a channel. This property is only present if the resourceId.kind value is youtube#channel.
     */
    channelId?: string;
    /**
     * The type of the API resource.
     */
    kind?: string;
    /**
     * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a playlist. This property is only present if the resourceId.kind value is youtube#playlist.
     */
    playlistId?: string;
    /**
     * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the resourceId.kind value is youtube#video.
     */
    videoId?: string;
}
