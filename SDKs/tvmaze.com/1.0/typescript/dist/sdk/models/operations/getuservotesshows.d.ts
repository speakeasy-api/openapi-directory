import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Embed full show info
 */
export declare enum GetUserVotesShowsEmbedEnum {
    Show = "show"
}
export declare class GetUserVotesShowsRequest extends SpeakeasyBase {
    /**
     * Embed full show info
     */
    embed?: GetUserVotesShowsEmbedEnum;
}
export declare class GetUserVotesShowsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of show votes
     */
    showVotes?: shared.ShowVote[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
