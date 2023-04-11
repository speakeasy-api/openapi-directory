import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateTrustProductEntityAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class CreateTrustProductEntityAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest extends SpeakeasyBase {
    /**
     * The SID of an object bag that holds information of the different items.
     */
    objectSid: string;
}
export declare class CreateTrustProductEntityAssignmentRequest extends SpeakeasyBase {
    requestBody?: CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest;
    /**
     * The unique string that we created to identify the TrustProduct resource.
     */
    trustProductSid: string;
}
export declare class CreateTrustProductEntityAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    trusthubV1TrustProductTrustProductEntityAssignment?: shared.TrusthubV1TrustProductTrustProductEntityAssignment;
}
