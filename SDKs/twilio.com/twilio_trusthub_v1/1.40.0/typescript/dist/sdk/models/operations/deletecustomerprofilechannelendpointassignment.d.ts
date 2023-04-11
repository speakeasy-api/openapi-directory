import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteCustomerProfileChannelEndpointAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class DeleteCustomerProfileChannelEndpointAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the CustomerProfile resource.
     */
    customerProfileSid: string;
    /**
     * The unique string that we created to identify the resource.
     */
    sid: string;
}
export declare class DeleteCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
