import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartDTMFSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class StartDTMFRequest extends SpeakeasyBase {
    /**
     * action to perform
     */
    dtmfRequest: shared.DTMFRequest;
    /**
     * UUID of the Call Leg
     */
    uuid: string;
}
export declare class StartDTMFResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Ok
     */
    dtmfResponse?: shared.DTMFResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
