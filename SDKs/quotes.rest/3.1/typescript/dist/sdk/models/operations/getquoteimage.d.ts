import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQuoteImageSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQuoteImageRequest extends SpeakeasyBase {
    /**
     * Should the response be a direct file download of the image or a base64 encoded image file wrapped in json?
     */
    binary?: boolean;
    /**
     * Quote Image id
     */
    id: string;
}
export declare class GetQuoteImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
