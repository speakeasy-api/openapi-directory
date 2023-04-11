import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The metadata about a "piece" which may be a story, song, report, etc.
 */
export declare class PieceInput extends SpeakeasyBase {
    /**
     * The artist or contributor name.
     */
    contributor?: string;
    /**
     * The short description of the piece.
     */
    description?: string;
    /**
     * The ID of the episode that owns the piece.
     */
    episodeId: number;
    /**
     * The long description of the piece.
     */
    fullDescription?: string;
    /**
     * The URI to the piece image content in CD Drive. Format should be 'cddrive:id:{value}' or 'cddrive://{path}'. This property is only used on modification and is not returned.
     */
    imageCdDriveUri?: string;
    /**
     * The name of the piece image file. Generated at creation.
     */
    imageFileName?: string;
    /**
     * The size of the piece image file in bytes. Generated at creation.
     */
    imageFileSize?: number;
    /**
     * The user's original name of the piece image file.
     */
    imageOriginalFileName?: string;
    /**
     * Seconds relative to the start of the episode.
     */
    relativeEndTime: number;
    /**
     * Seconds relative to the start of the episode.
     */
    relativeStartTime: number;
    /**
     * The number of the segment that this piece is in, starting with 1. This is an optional field but it can be used to provide more detail by linking the piece to a specific audio segment.
     */
    segmentNumber?: number;
    /**
     * The human readable title of the piece that is normally displayed on an end user's device.
     */
    title: string;
}
/**
 * The metadata about a "piece" which may be a story, song, report, etc.
 */
export declare class Piece extends SpeakeasyBase {
    /**
     * The artist or contributor name.
     */
    contributor?: string;
    /**
     * The date the piece was created. Generated at creation.
     */
    createdDate?: Date;
    /**
     * The short description of the piece.
     */
    description?: string;
    /**
     * The ID of the episode that owns the piece.
     */
    episodeId: number;
    /**
     * The long description of the piece.
     */
    fullDescription?: string;
    /**
     * The unique ID of the piece. Generated at creation.
     */
    id?: number;
    /**
     * The URI to the piece image content in CD Drive. Format should be 'cddrive:id:{value}' or 'cddrive://{path}'. This property is only used on modification and is not returned.
     */
    imageCdDriveUri?: string;
    /**
     * The name of the piece image file. Generated at creation.
     */
    imageFileName?: string;
    /**
     * The size of the piece image file in bytes. Generated at creation.
     */
    imageFileSize?: number;
    /**
     * The user's original name of the piece image file.
     */
    imageOriginalFileName?: string;
    /**
     * The date the piece was last modified/updated. Automatically updated on any write operation.
     */
    lastModifiedDate?: Date;
    /**
     * Seconds relative to the start of the episode.
     */
    relativeEndTime: number;
    /**
     * Seconds relative to the start of the episode.
     */
    relativeStartTime: number;
    /**
     * The number of the segment that this piece is in, starting with 1. This is an optional field but it can be used to provide more detail by linking the piece to a specific audio segment.
     */
    segmentNumber?: number;
    /**
     * The human readable title of the piece that is normally displayed on an end user's device.
     */
    title: string;
}
