import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUserFollowsWebchannelsWebchannelIdRequest extends SpeakeasyBase {
    webchannelId: number;
}
export declare class PutUserFollowsWebchannelsWebchannelIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * this webchannel is now followed
     */
    webchannelFollow?: shared.WebchannelFollow;
}
