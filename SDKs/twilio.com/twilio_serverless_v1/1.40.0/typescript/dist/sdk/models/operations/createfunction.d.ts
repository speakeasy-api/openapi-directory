import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateFunctionServerList: readonly ["https://serverless.twilio.com"];
export declare class CreateFunctionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateFunctionCreateFunctionRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the Function resource. It can be a maximum of 255 characters.
     */
    friendlyName: string;
}
export declare class CreateFunctionRequest extends SpeakeasyBase {
    requestBody?: CreateFunctionCreateFunctionRequest;
    /**
     * The SID of the Service to create the Function resource under.
     */
    serviceSid: string;
}
export declare class CreateFunctionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    serverlessV1ServiceFunction?: shared.ServerlessV1ServiceFunction;
}
