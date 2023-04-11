import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1FeaturedTagsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1FeaturedTagsRequestBody extends SpeakeasyBase {
    name?: string;
}
export declare class PostApiV1FeaturedTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * If name is not a valid hashtag, e.g. contains illegal characters or only numbers
     */
    error?: shared.ErrorT;
    /**
     * Success.
     */
    featuredTag?: shared.FeaturedTag;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
