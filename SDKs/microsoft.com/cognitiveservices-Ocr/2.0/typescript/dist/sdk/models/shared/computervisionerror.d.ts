import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The error code.
 */
export declare enum ComputerVisionErrorCodeEnum {
    InvalidImageFormat = "InvalidImageFormat",
    UnsupportedMediaType = "UnsupportedMediaType",
    InvalidImageUrl = "InvalidImageUrl",
    NotSupportedFeature = "NotSupportedFeature",
    NotSupportedImage = "NotSupportedImage",
    Timeout = "Timeout",
    InternalServerError = "InternalServerError",
    InvalidImageSize = "InvalidImageSize",
    BadArgument = "BadArgument",
    DetectFaceError = "DetectFaceError",
    NotSupportedLanguage = "NotSupportedLanguage",
    InvalidThumbnailSize = "InvalidThumbnailSize",
    InvalidDetails = "InvalidDetails",
    InvalidModel = "InvalidModel",
    CancelledRequest = "CancelledRequest",
    NotSupportedVisualFeature = "NotSupportedVisualFeature",
    FailedToProcess = "FailedToProcess",
    Unspecified = "Unspecified",
    StorageException = "StorageException"
}
/**
 * Details about the API request error.
 */
export declare class ComputerVisionError extends SpeakeasyBase {
    /**
     * The error code.
     */
    code: ComputerVisionErrorCodeEnum;
    /**
     * A message explaining the error reported by the service.
     */
    message: string;
    /**
     * A unique request identifier.
     */
    requestId?: string;
}
