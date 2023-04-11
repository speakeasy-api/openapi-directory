import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUserFollowsShowsShowIdRequest extends SpeakeasyBase {
    showId: number;
}
export declare class DeleteUserFollowsShowsShowIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
