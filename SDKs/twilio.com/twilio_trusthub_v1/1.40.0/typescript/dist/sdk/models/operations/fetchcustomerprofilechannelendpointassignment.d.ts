import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCustomerProfileChannelEndpointAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class FetchCustomerProfileChannelEndpointAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the CustomerProfile resource.
     */
    customerProfileSid: string;
    /**
     * The unique string that we created to identify the resource.
     */
    sid: string;
}
export declare class FetchCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment?: shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment;
}
