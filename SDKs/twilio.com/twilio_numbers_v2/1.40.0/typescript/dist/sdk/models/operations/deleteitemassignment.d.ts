import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteItemAssignmentServerList: readonly ["https://numbers.twilio.com"];
export declare class DeleteItemAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteItemAssignmentRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Bundle resource.
     */
    bundleSid: string;
    /**
     * The unique string that we created to identify the Identity resource.
     */
    sid: string;
}
export declare class DeleteItemAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
