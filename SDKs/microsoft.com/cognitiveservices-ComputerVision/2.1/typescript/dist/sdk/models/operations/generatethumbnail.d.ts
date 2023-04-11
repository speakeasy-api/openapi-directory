import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenerateThumbnailRequest extends SpeakeasyBase {
    /**
     * A JSON document with a URL pointing to the image that is to be analyzed.
     */
    imageUrl: shared.ImageUrl;
    /**
     * Height of the thumbnail, in pixels. It must be between 1 and 1024. Recommended minimum of 50.
     */
    height: number;
    /**
     * Boolean flag for enabling smart cropping.
     */
    smartCropping?: boolean;
    /**
     * Width of the thumbnail, in pixels. It must be between 1 and 1024. Recommended minimum of 50.
     */
    width: number;
}
export declare class GenerateThumbnailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * The generated thumbnail in binary format.
     */
    generateThumbnail200ApplicationOctetStreamBinaryString?: Uint8Array;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
