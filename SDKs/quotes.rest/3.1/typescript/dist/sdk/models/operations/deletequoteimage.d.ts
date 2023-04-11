import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteQuoteImageSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class DeleteQuoteImageRequest extends SpeakeasyBase {
    /**
     * Quote Image ID
     */
    id: string;
}
export declare class DeleteQuoteImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
