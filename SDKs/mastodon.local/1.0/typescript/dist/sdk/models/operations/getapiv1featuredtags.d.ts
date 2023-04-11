import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1FeaturedTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Success.
     */
    featuredTags?: shared.FeaturedTag[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
