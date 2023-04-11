import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed.
 */
export declare enum VideoStatusFailureReasonEnum {
    Conversion = "conversion",
    InvalidFile = "invalidFile",
    EmptyFile = "emptyFile",
    TooSmall = "tooSmall",
    Codec = "codec",
    UploadAborted = "uploadAborted"
}
/**
 * The video's license. @mutable youtube.videos.insert youtube.videos.update
 */
export declare enum VideoStatusLicenseEnum {
    Youtube = "youtube",
    CreativeCommon = "creativeCommon"
}
/**
 * The video's privacy status.
 */
export declare enum VideoStatusPrivacyStatusEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private"
}
/**
 * This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected.
 */
export declare enum VideoStatusRejectionReasonEnum {
    Copyright = "copyright",
    Inappropriate = "inappropriate",
    Duplicate = "duplicate",
    TermsOfUse = "termsOfUse",
    UploaderAccountSuspended = "uploaderAccountSuspended",
    Length = "length",
    Claim = "claim",
    UploaderAccountClosed = "uploaderAccountClosed",
    Trademark = "trademark",
    Legal = "legal"
}
/**
 * The status of the uploaded video.
 */
export declare enum VideoStatusUploadStatusEnum {
    Uploaded = "uploaded",
    Processed = "processed",
    Failed = "failed",
    Rejected = "rejected",
    Deleted = "deleted"
}
/**
 * Basic details about a video category, such as its localized title. Next Id: 18
 */
export declare class VideoStatus extends SpeakeasyBase {
    /**
     * This value indicates if the video can be embedded on another website. @mutable youtube.videos.insert youtube.videos.update
     */
    embeddable?: boolean;
    /**
     * This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed.
     */
    failureReason?: VideoStatusFailureReasonEnum;
    /**
     * The video's license. @mutable youtube.videos.insert youtube.videos.update
     */
    license?: VideoStatusLicenseEnum;
    madeForKids?: boolean;
    /**
     * The video's privacy status.
     */
    privacyStatus?: VideoStatusPrivacyStatusEnum;
    /**
     * This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled. @mutable youtube.videos.insert youtube.videos.update
     */
    publicStatsViewable?: boolean;
    /**
     * The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private..
     */
    publishAt?: Date;
    /**
     * This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected.
     */
    rejectionReason?: VideoStatusRejectionReasonEnum;
    selfDeclaredMadeForKids?: boolean;
    /**
     * The status of the uploaded video.
     */
    uploadStatus?: VideoStatusUploadStatusEnum;
}
