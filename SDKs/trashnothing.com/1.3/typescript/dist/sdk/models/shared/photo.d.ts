import { SpeakeasyBase } from "../../../internal/utils";
export declare class PhotoImages extends SpeakeasyBase {
    height?: number;
    url?: string;
    width?: number;
}
export declare class Photo extends SpeakeasyBase {
    /**
     * A blurhash of the photo that can be used as a placeholder while the photo is loading (see: https://github.com/woltapp/blurhash). May be null if no blurhash is available and the length of the blurhash can vary based on the photo.
     *
     * @remarks
     *
     */
    blurhash?: string;
    /**
     * All the versions of this photo ordered from smallest to largest.  This list is guaranteed to include the photos specified by the above thumbnail and url properties.
     */
    images?: PhotoImages[];
    photoId?: string;
    /**
     * A URL to a thumbnail of this photo.  The size of the thumbnail depends on the device_pixel_ratio parameter and it is not guaranteed to be square.
     */
    thumbnail?: string;
    /**
     * A URL to a large version of this photo (but not necessarily the largest size available).
     */
    url?: string;
}
