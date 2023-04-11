import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ShortenLinkRequest extends SpeakeasyBase {
    /**
     * cta id
     */
    cta: number;
    /**
     * URL
     */
    url: string;
}
export declare class ShortenLinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
