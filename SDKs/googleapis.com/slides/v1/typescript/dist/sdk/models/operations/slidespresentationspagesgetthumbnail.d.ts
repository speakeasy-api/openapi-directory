import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SlidesPresentationsPagesGetThumbnailSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SlidesPresentationsPagesGetThumbnailSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SlidesPresentationsPagesGetThumbnailSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SlidesPresentationsPagesGetThumbnailSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SlidesPresentationsPagesGetThumbnailSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SlidesPresentationsPagesGetThumbnailSecurity extends SpeakeasyBase {
    option1?: SlidesPresentationsPagesGetThumbnailSecurityOption1;
    option2?: SlidesPresentationsPagesGetThumbnailSecurityOption2;
    option3?: SlidesPresentationsPagesGetThumbnailSecurityOption3;
    option4?: SlidesPresentationsPagesGetThumbnailSecurityOption4;
    option5?: SlidesPresentationsPagesGetThumbnailSecurityOption5;
}
/**
 * The optional mime type of the thumbnail image. If you don't specify the mime type, the mime type defaults to PNG.
 */
export declare enum SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum {
    Png = "PNG"
}
/**
 * The optional thumbnail image size. If you don't specify the size, the server chooses a default size of the image.
 */
export declare enum SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum {
    ThumbnailSizeUnspecified = "THUMBNAIL_SIZE_UNSPECIFIED",
    Large = "LARGE",
    Medium = "MEDIUM",
    Small = "SMALL"
}
export declare class SlidesPresentationsPagesGetThumbnailRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The object ID of the page whose thumbnail to retrieve.
     */
    pageObjectId: string;
    /**
     * The ID of the presentation to retrieve.
     */
    presentationId: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The optional mime type of the thumbnail image. If you don't specify the mime type, the mime type defaults to PNG.
     */
    thumbnailPropertiesMimeType?: SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum;
    /**
     * The optional thumbnail image size. If you don't specify the size, the server chooses a default size of the image.
     */
    thumbnailPropertiesThumbnailSize?: SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class SlidesPresentationsPagesGetThumbnailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    thumbnail?: shared.Thumbnail;
}
