import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateCustomerProfileChannelEndpointAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class CreateCustomerProfileChannelEndpointAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
    /**
     * The SID of an channel endpoint
     */
    channelEndpointSid: string;
    /**
     * The type of channel endpoint. eg: phone-number
     */
    channelEndpointType: string;
}
export declare class CreateCustomerProfileChannelEndpointAssignmentRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the CustomerProfile resource.
     */
    customerProfileSid: string;
    requestBody?: CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest;
}
export declare class CreateCustomerProfileChannelEndpointAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment?: shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment;
}
