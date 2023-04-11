import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class HashtagStatsRequest extends SpeakeasyBase {
    /**
     * Hashtag(s) without # mark
     */
    tags: any[];
}
export declare class HashtagStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
