import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetProfileImageRequestBodyPhoto extends SpeakeasyBase {
    content: Uint8Array;
    photo: string;
}
export declare class SetProfileImageRequestBody extends SpeakeasyBase {
    /**
     * If the photo needs to be cropped, a JSON encoded object with the crop arguments can be passed. The supported crop arguments are below.  All arguments except rotate are required. <br /><br /> - **original_width**: Original width of the photo before being cropped or rotated (in pixels).<br /> - **original_height**: Original height of the photo before being cropped or rotated (in pixels).<br /> - **x**: The x-coordinate of the top left corner of the cropped area.<br /> - **y**: The y-coordinate of the top left corner of the cropped area.<br /> - **size**: The size of the square cropped area.<br /> - **rotate**: (optional) The number of degrees to rotate the image before cropping.
     *
     * @remarks
     *   Currently only 90, 180 and 270 are supported which correspond to rotate left, rotate upside down and rotate right.
     * <br />
     *
     */
    crop?: string;
    /**
     * Client device pixel ratio used to determine thumbnail size (default 1.0).
     */
    devicePixelRatio?: number;
    /**
     * Photo to upload.
     */
    photo?: SetProfileImageRequestBodyPhoto;
    /**
     * Photo to use (if already uploaded).
     */
    photoId?: string;
    /**
     * Whether or not to set the photo as the users' default profile image.  Set to 1 to enable and 0 to disable.
     *
     * @remarks
     *
     */
    setDefault?: number;
}
/**
 * The updated user and the photo.
 */
export declare class SetProfileImage200ApplicationJSON extends SpeakeasyBase {
    /**
     * The result of uploading or editing a photo.
     */
    photo?: shared.PhotoResult;
    user?: shared.CurrentUser;
}
export declare class SetProfileImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The updated user and the photo.
     */
    setProfileImage200ApplicationJSONObject?: SetProfileImage200ApplicationJSON;
}
