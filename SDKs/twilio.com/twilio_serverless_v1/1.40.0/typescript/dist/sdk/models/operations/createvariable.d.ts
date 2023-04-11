import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateVariableServerList: readonly ["https://serverless.twilio.com"];
export declare class CreateVariableSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateVariableCreateVariableRequest extends SpeakeasyBase {
    /**
     * A string by which the Variable resource can be referenced. It can be a maximum of 128 characters.
     */
    key: string;
    /**
     * A string that contains the actual value of the Variable. It can be a maximum of 450 bytes in size.
     */
    value: string;
}
export declare class CreateVariableRequest extends SpeakeasyBase {
    /**
     * The SID of the Environment in which the Variable resource exists.
     */
    environmentSid: string;
    requestBody?: CreateVariableCreateVariableRequest;
    /**
     * The SID of the Service to create the Variable resource under.
     */
    serviceSid: string;
}
export declare class CreateVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    serverlessV1ServiceEnvironmentVariable?: shared.ServerlessV1ServiceEnvironmentVariable;
}
