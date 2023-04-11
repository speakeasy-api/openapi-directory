import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1AccountsIdFeaturedTagsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1AccountsIdFeaturedTagsRequest extends SpeakeasyBase {
    /**
     * The id of the account in the database
     */
    id: string;
}
export declare class GetApiV1AccountsIdFeaturedTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header, or instance is in whitelist mode and your token is not authorized with a user
     */
    error?: shared.ErrorT;
    /**
     * Success
     */
    featuredTags?: shared.FeaturedTag[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
