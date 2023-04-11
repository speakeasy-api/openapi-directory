import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserFollowsShowsShowIdRequest extends SpeakeasyBase {
    showId: number;
}
export declare class GetUserFollowsShowsShowIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The followed show
     */
    showFollow?: shared.ShowFollow;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
