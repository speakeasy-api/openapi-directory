import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImageResizeRequestBody extends SpeakeasyBase {
    /**
     * The image background color in hexadecimal notation (e.g. #0000ff). For PNG output the special value of 'transparent' can also be used. For JPG output the default is black (#000000)
     */
    bgColor?: string;
    /**
     * The output image format, can be either png or jpg
     */
    format?: string;
    /**
     * The height to resize to (in px). If you don't set this field then the height will be automatic based on the requested width and image aspect ratio
     */
    height?: number;
    /**
     * The URL or Base64 encoded Data URL for the source image. You can also upload an image file directly using multipart/form-data
     */
    imageUrl: string;
    /**
     * The resize mode to use, we support 3 main resizing modes: <ul> <li><b>scale</b><br>Resize to within the width and height specified while preserving aspect ratio. In this mode the width or height will be automatically adjusted to fit the aspect ratio</li> <li><b>pad</b><br>Resize to exactly the width and height specified while preserving aspect ratio and pad any space left over. Any padded space will be filled in with the 'bg-color' value</li> <li><b>crop</b><br>Resize to exactly the width and height specified while preserving aspect ratio and crop any space which fall outside the area. The cropping window is centered on the original image</li> </ul>
     */
    resizeMode?: string;
    /**
     * The width to resize to (in px)
     */
    width: number;
}
export declare class ImageResizeResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    imageResize200ApplicationJSONBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
