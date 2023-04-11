import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteTrustProductChannelEndpointAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class DeleteTrustProductChannelEndpointAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteTrustProductChannelEndpointAssignmentRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the resource.
     */
    sid: string;
    /**
     * The unique string that we created to identify the CustomerProfile resource.
     */
    trustProductSid: string;
}
export declare class DeleteTrustProductChannelEndpointAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
