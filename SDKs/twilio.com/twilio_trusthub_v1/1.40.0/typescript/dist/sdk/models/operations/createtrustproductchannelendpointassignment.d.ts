import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateTrustProductChannelEndpointAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class CreateTrustProductChannelEndpointAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest extends SpeakeasyBase {
    /**
     * The SID of an channel endpoint
     */
    channelEndpointSid: string;
    /**
     * The type of channel endpoint. eg: phone-number
     */
    channelEndpointType: string;
}
export declare class CreateTrustProductChannelEndpointAssignmentRequest extends SpeakeasyBase {
    requestBody?: CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest;
    /**
     * The unique string that we created to identify the CustomerProfile resource.
     */
    trustProductSid: string;
}
export declare class CreateTrustProductChannelEndpointAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    trusthubV1TrustProductTrustProductChannelEndpointAssignment?: shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment;
}
