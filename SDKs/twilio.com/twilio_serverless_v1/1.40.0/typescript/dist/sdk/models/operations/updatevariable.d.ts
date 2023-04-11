import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateVariableServerList: readonly ["https://serverless.twilio.com"];
export declare class UpdateVariableSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateVariableUpdateVariableRequest extends SpeakeasyBase {
    /**
     * A string by which the Variable resource can be referenced. It can be a maximum of 128 characters.
     */
    key?: string;
    /**
     * A string that contains the actual value of the Variable. It can be a maximum of 450 bytes in size.
     */
    value?: string;
}
export declare class UpdateVariableRequest extends SpeakeasyBase {
    /**
     * The SID of the Environment with the Variable resource to update.
     */
    environmentSid: string;
    requestBody?: UpdateVariableUpdateVariableRequest;
    /**
     * The SID of the Service to update the Variable resource under.
     */
    serviceSid: string;
    /**
     * The SID of the Variable resource to update.
     */
    sid: string;
}
export declare class UpdateVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    serverlessV1ServiceEnvironmentVariable?: shared.ServerlessV1ServiceEnvironmentVariable;
}
