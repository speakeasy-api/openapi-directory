import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class UserPhoto extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Height of the photo in pixels.
     */
    height?: number;
    /**
     * The ID the API uses to uniquely identify the user.
     */
    id?: string;
    /**
     * The type of the API resource. For Photo resources, this is `admin#directory#user#photo`.
     */
    kind?: string;
    /**
     * The MIME type of the photo. Allowed values are `JPEG`, `PNG`, `GIF`, `BMP`, `TIFF`, and web-safe base64 encoding.
     */
    mimeType?: string;
    /**
     * The user photo's upload data in [web-safe Base64](https://en.wikipedia.org/wiki/Base64#URL_applications) format in bytes. This means: * The slash (/) character is replaced with the underscore (_) character. * The plus sign (+) character is replaced with the hyphen (-) character. * The equals sign (=) character is replaced with the asterisk (*). * For padding, the period (.) character is used instead of the RFC-4648 baseURL definition which uses the equals sign (=) for padding. This is done to simplify URL-parsing. * Whatever the size of the photo being uploaded, the API downsizes it to 96x96 pixels.
     */
    photoData?: string;
    /**
     * The user's primary email address.
     */
    primaryEmail?: string;
    /**
     * Width of the photo in pixels.
     */
    width?: number;
}
