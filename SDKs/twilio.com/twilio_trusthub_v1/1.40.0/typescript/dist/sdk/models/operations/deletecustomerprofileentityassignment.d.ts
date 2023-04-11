import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteCustomerProfileEntityAssignmentServerList: readonly ["https://trusthub.twilio.com"];
export declare class DeleteCustomerProfileEntityAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteCustomerProfileEntityAssignmentRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the CustomerProfile resource.
     */
    customerProfileSid: string;
    /**
     * The unique string that we created to identify the Identity resource.
     */
    sid: string;
}
export declare class DeleteCustomerProfileEntityAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
