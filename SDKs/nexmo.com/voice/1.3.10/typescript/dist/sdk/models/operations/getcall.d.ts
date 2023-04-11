import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCallSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetCallRequest extends SpeakeasyBase {
    /**
     * UUID of the Call
     */
    uuid: string;
}
export declare class GetCallResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Ok
     */
    getCallResponse?: shared.GetCallResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
