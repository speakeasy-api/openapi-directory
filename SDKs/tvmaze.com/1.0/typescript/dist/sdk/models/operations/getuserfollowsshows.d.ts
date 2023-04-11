import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Embed full show info
 */
export declare enum GetUserFollowsShowsEmbedEnum {
    Show = "show"
}
export declare class GetUserFollowsShowsRequest extends SpeakeasyBase {
    /**
     * Embed full show info
     */
    embed?: GetUserFollowsShowsEmbedEnum;
}
export declare class GetUserFollowsShowsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of followed shows
     */
    showFollows?: shared.ShowFollow[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
