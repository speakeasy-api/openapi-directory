import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteVariableServerList: readonly ["https://serverless.twilio.com"];
export declare class DeleteVariableSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteVariableRequest extends SpeakeasyBase {
    /**
     * The SID of the Environment with the Variables to delete.
     */
    environmentSid: string;
    /**
     * The SID of the Service to delete the Variable resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Variable resource to delete.
     */
    sid: string;
}
export declare class DeleteVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
