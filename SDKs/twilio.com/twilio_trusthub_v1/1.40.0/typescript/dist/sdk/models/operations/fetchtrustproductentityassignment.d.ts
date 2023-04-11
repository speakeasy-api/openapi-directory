import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchTrustProductEntityAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class FetchTrustProductEntityAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchTrustProductEntityAssignmentRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Identity resource.
     */
    sid: string;
    /**
     * The unique string that we created to identify the TrustProduct resource.
     */
    trustProductSid: string;
}
export declare class FetchTrustProductEntityAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trusthubV1TrustProductTrustProductEntityAssignment?: shared.TrusthubV1TrustProductTrustProductEntityAssignment;
}
