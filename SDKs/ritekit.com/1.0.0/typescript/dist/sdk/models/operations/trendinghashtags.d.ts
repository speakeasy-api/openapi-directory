import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TrendingHashtagsRequest extends SpeakeasyBase {
    /**
     * Restrict results only to green hashtags. Hides overused (red) hashtags.
     */
    green?: boolean;
    /**
     * Restrict results only to hashtags with latin characters
     */
    latin?: boolean;
}
export declare class TrendingHashtagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
