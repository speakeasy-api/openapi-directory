import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCustomerProfileEntityAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class FetchCustomerProfileEntityAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCustomerProfileEntityAssignmentRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the CustomerProfile resource.
     */
    customerProfileSid: string;
    /**
     * The unique string that we created to identify the Identity resource.
     */
    sid: string;
}
export declare class FetchCustomerProfileEntityAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trusthubV1CustomerProfileCustomerProfileEntityAssignment?: shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment;
}
