import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdatePlayerStreamerServerList: readonly ["https://media.twilio.com"];
export declare class UpdatePlayerStreamerSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdatePlayerStreamerUpdatePlayerStreamerRequest extends SpeakeasyBase {
    status: shared.PlayerStreamerEnumUpdateStatusEnum;
}
export declare class UpdatePlayerStreamerRequest extends SpeakeasyBase {
    requestBody?: UpdatePlayerStreamerUpdatePlayerStreamerRequest;
    /**
     * The SID of the PlayerStreamer resource to update.
     */
    sid: string;
}
export declare class UpdatePlayerStreamerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    mediaV1PlayerStreamer?: shared.MediaV1PlayerStreamer;
}
