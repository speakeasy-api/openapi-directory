import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An audio segment in an episode.
 */
export declare class Segment extends SpeakeasyBase {
    /**
     * The number of audio channels in the segment. Generated at creation.
     */
    channels?: number;
    /**
     * The date the segment was created. Generated at creation.
     */
    createdDate?: Date;
    /**
     * The ID of the episode that owns the segment.
     */
    episodeId: number;
    /**
     * The name of the audio content file. Generated at creation.
     */
    fileName?: string;
    /**
     * The size of the audio content file in bytes. Generated at creation.
     */
    fileSize?: number;
    /**
     * The unique ID of the segment. Generated at creation.
     */
    id?: number;
    /**
     * The in-cue copy that signals the start of the segment to a board operator.
     */
    inCue?: string;
    /**
     * The date the segment was last modified/updated. Automatically updated on any write operation.
     */
    lastModifiedDate?: Date;
    /**
     * The length (duration) of the segment in seconds.
     */
    length?: number;
    /**
     * The original name of the audio content file.
     */
    originalFileName?: string;
    /**
     * The out-cue copy that signals the end of the segment to a board operator.
     */
    outCue?: string;
    /**
     * The number of the segment in the episode, starting with 1.
     */
    segmentNumber: number;
}
