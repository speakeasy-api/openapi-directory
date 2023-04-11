import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateCallSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class UpdateCallRequest extends SpeakeasyBase {
    requestBody: any;
    /**
     * UUID of the Call
     */
    uuid: string;
}
export declare class UpdateCallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
