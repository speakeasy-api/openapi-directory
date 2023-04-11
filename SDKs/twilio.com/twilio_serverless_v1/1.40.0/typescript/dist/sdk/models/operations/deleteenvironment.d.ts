import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteEnvironmentServerList: readonly ["https://serverless.twilio.com"];
export declare class DeleteEnvironmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteEnvironmentRequest extends SpeakeasyBase {
    /**
     * The SID of the Service to delete the Environment resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Environment resource to delete.
     */
    sid: string;
}
export declare class DeleteEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
