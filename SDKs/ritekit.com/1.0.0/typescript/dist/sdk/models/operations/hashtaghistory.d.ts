import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class HashtagHistoryRequest extends SpeakeasyBase {
    /**
     * Hashtag without # mark
     */
    hashtag: string;
}
export declare class HashtagHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
