import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopTalkSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class StopTalkRequest extends SpeakeasyBase {
    /**
     * UUID of the Call Leg
     */
    uuid: string;
}
export declare class StopTalkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Ok
     */
    stopTalkResponse?: shared.StopTalkResponse;
}
