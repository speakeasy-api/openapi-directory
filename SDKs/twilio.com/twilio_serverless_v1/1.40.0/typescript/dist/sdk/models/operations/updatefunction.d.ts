import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateFunctionServerList: readonly ["https://serverless.twilio.com"];
export declare class UpdateFunctionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateFunctionUpdateFunctionRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the Function resource. It can be a maximum of 255 characters.
     */
    friendlyName: string;
}
export declare class UpdateFunctionRequest extends SpeakeasyBase {
    requestBody?: UpdateFunctionUpdateFunctionRequest;
    /**
     * The SID of the Service to update the Function resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Function resource to update.
     */
    sid: string;
}
export declare class UpdateFunctionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    serverlessV1ServiceFunction?: shared.ServerlessV1ServiceFunction;
}
