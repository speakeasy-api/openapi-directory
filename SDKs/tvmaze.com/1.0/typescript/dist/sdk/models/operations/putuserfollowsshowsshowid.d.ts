import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUserFollowsShowsShowIdRequest extends SpeakeasyBase {
    showId: number;
}
export declare class PutUserFollowsShowsShowIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * This show is now followed
     */
    showFollow?: shared.ShowFollow;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
