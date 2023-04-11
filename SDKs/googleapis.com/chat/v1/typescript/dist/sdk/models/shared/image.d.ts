import { SpeakeasyBase } from "../../../internal/utils";
import { OnClick } from "./onclick";
/**
 * An image that is specified by a URL and can have an onclick action.
 */
export declare class Image extends SpeakeasyBase {
    /**
     * The aspect ratio of this image (width/height). This field allows clients to reserve the right height for the image while waiting for it to load. It's not meant to override the native aspect ratio of the image. If unset, the server fills it by prefetching the image.
     */
    aspectRatio?: number;
    /**
     * The URL of the image.
     */
    imageUrl?: string;
    /**
     * An onclick action (e.g. open a link).
     */
    onClick?: OnClick;
}
