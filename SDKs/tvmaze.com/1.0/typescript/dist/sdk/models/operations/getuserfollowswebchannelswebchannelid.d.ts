import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserFollowsWebchannelsWebchannelIdRequest extends SpeakeasyBase {
    webchannelId: number;
}
export declare class GetUserFollowsWebchannelsWebchannelIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The followed webchannel
     */
    webchannelFollow?: shared.WebchannelFollow;
}
