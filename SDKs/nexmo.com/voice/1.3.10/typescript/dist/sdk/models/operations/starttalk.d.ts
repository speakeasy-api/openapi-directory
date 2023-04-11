import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartTalkSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class StartTalkRequest extends SpeakeasyBase {
    /**
     * Action to perform
     */
    startTalkRequest?: shared.StartTalkRequest;
    /**
     * UUID of the Call Leg
     */
    uuid: string;
}
export declare class StartTalkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Ok
     */
    startTalkResponse?: shared.StartTalkResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
