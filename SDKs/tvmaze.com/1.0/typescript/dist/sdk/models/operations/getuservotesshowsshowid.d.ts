import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserVotesShowsShowIdRequest extends SpeakeasyBase {
    showId: number;
}
export declare class GetUserVotesShowsShowIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The show vote
     */
    showVote?: shared.ShowVote;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
