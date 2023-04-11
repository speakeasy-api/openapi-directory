import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUserVotesShowsShowIdRequest extends SpeakeasyBase {
    showId: number;
}
export declare class DeleteUserVotesShowsShowIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
