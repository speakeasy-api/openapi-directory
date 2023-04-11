import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the attachment.
 */
export declare enum AttachmentTypeEnum {
    Unknown = "unknown",
    Image = "image",
    Gifv = "gifv",
    Video = "video",
    Audio = "audio"
}
/**
 * Represents a file or media attachment that can be added to a status.
 *
 * @see {@link https://docs.joinmastodon.org/entities/attachment/}
 */
export declare class Attachment extends SpeakeasyBase {
    /**
     * A hash computed by the [BlurHash algorithm](https://github.com/woltapp/blurhash), for generating colorful preview thumbnails when media has not been downloaded yet.
     */
    blurhash?: string;
    /**
     * Alternate text that describes what is in the media attachment, to be used for the visually impaired or when media attachments do not load.
     */
    description?: string;
    /**
     * The ID of the attachment in the database. Cast from an integer but not guaranteed to be a number
     */
    id: string;
    /**
     * Metadata returned by Paperclip.
     */
    meta?: Record<string, any>;
    /**
     * The location of a scaled-down preview of the attachment.
     */
    previewUrl: string;
    /**
     * The location of the full-size original attachment on the remote website. String or null if the attachment is local.
     */
    remoteUrl?: string;
    /**
     * A shorter URL for the attachment.
     */
    textUrl?: string;
    /**
     * The type of the attachment.
     */
    type: AttachmentTypeEnum;
    /**
     * The location of the original full-size attachment.
     */
    url: string;
}
