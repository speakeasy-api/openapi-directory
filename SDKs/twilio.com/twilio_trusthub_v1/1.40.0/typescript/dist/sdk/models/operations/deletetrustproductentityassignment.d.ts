import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteTrustProductEntityAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class DeleteTrustProductEntityAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteTrustProductEntityAssignmentRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Identity resource.
     */
    sid: string;
    /**
     * The unique string that we created to identify the TrustProduct resource.
     */
    trustProductSid: string;
}
export declare class DeleteTrustProductEntityAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
