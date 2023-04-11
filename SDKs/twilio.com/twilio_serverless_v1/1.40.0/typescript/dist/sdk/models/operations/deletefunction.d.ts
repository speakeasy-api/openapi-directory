import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteFunctionServerList: readonly ["https://serverless.twilio.com"];
export declare class DeleteFunctionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteFunctionRequest extends SpeakeasyBase {
    /**
     * The SID of the Service to delete the Function resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Function resource to delete.
     */
    sid: string;
}
export declare class DeleteFunctionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
