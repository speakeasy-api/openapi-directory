import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class HashtagsCleanerRequest extends SpeakeasyBase {
    /**
     * post
     */
    post: string;
}
export declare class HashtagsCleanerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
