import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AutoEmojifyRequest extends SpeakeasyBase {
    /**
     * Text of the post
     */
    text: string;
}
export declare class AutoEmojifyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
