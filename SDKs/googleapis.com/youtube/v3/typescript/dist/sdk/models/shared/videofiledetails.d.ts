import { SpeakeasyBase } from "../../../internal/utils";
import { VideoFileDetailsAudioStream } from "./videofiledetailsaudiostream";
import { VideoFileDetailsVideoStream } from "./videofiledetailsvideostream";
/**
 * The uploaded file's type as detected by YouTube's video processing engine. Currently, YouTube only processes video files, but this field is present whether a video file or another type of file was uploaded.
 */
export declare enum VideoFileDetailsFileTypeEnum {
    Video = "video",
    Audio = "audio",
    Image = "image",
    Archive = "archive",
    Document = "document",
    Project = "project",
    Other = "other"
}
/**
 * Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information.
 */
export declare class VideoFileDetails extends SpeakeasyBase {
    /**
     * A list of audio streams contained in the uploaded video file. Each item in the list contains detailed metadata about an audio stream.
     */
    audioStreams?: VideoFileDetailsAudioStream[];
    /**
     * The uploaded video file's combined (video and audio) bitrate in bits per second.
     */
    bitrateBps?: string;
    /**
     * The uploaded video file's container format.
     */
    container?: string;
    /**
     * The date and time when the uploaded video file was created. The value is specified in ISO 8601 format. Currently, the following ISO 8601 formats are supported: - Date only: YYYY-MM-DD - Naive time: YYYY-MM-DDTHH:MM:SS - Time with timezone: YYYY-MM-DDTHH:MM:SS+HH:MM
     */
    creationTime?: string;
    /**
     * The length of the uploaded video in milliseconds.
     */
    durationMs?: string;
    /**
     * The uploaded file's name. This field is present whether a video file or another type of file was uploaded.
     */
    fileName?: string;
    /**
     * The uploaded file's size in bytes. This field is present whether a video file or another type of file was uploaded.
     */
    fileSize?: string;
    /**
     * The uploaded file's type as detected by YouTube's video processing engine. Currently, YouTube only processes video files, but this field is present whether a video file or another type of file was uploaded.
     */
    fileType?: VideoFileDetailsFileTypeEnum;
    /**
     * A list of video streams contained in the uploaded video file. Each item in the list contains detailed metadata about a video stream.
     */
    videoStreams?: VideoFileDetailsVideoStream[];
}
