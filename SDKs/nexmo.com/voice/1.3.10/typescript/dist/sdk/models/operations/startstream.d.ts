import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartStreamSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class StartStreamRequest extends SpeakeasyBase {
    /**
     * action to perform
     */
    startStreamRequest: shared.StartStreamRequest;
    /**
     * UUID of the Call Leg
     */
    uuid: string;
}
export declare class StartStreamResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Ok
     */
    startStreamResponse?: shared.StartStreamResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
