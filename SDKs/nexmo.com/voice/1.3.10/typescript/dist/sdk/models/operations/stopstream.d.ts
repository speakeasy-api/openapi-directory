import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopStreamSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class StopStreamRequest extends SpeakeasyBase {
    /**
     * UUID of the Call Leg
     */
    uuid: string;
}
export declare class StopStreamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Ok
     */
    stopStreamResponse?: shared.StopStreamResponse;
}
