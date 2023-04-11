import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUserVotesShowsShowIdRequest extends SpeakeasyBase {
    showVoteInput?: shared.ShowVoteInput;
    showId: number;
}
export declare class PutUserVotesShowsShowIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * This show is now voted for
     */
    showVote?: shared.ShowVote;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
