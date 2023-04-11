import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateCustomerProfileEntityAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class CreateCustomerProfileEntityAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest extends SpeakeasyBase {
    /**
     * The SID of an object bag that holds information of the different items.
     */
    objectSid: string;
}
export declare class CreateCustomerProfileEntityAssignmentRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the CustomerProfile resource.
     */
    customerProfileSid: string;
    requestBody?: CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest;
}
export declare class CreateCustomerProfileEntityAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    trusthubV1CustomerProfileCustomerProfileEntityAssignment?: shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment;
}
