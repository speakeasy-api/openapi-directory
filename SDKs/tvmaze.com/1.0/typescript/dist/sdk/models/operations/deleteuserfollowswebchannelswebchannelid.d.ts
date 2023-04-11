import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUserFollowsWebchannelsWebchannelIdRequest extends SpeakeasyBase {
    webchannelId: number;
}
export declare class DeleteUserFollowsWebchannelsWebchannelIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
