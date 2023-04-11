import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateCustomerProfileServerList: readonly ["https://trusthub.twilio.com"];
export declare class UpdateCustomerProfileSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateCustomerProfileUpdateCustomerProfileRequest extends SpeakeasyBase {
    /**
     * The email address that will receive updates when the Customer-Profile resource changes status.
     */
    email?: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    status?: shared.CustomerProfileEnumStatusEnum;
    /**
     * The URL we call to inform your application of status changes.
     */
    statusCallback?: string;
}
export declare class UpdateCustomerProfileRequest extends SpeakeasyBase {
    requestBody?: UpdateCustomerProfileUpdateCustomerProfileRequest;
    /**
     * The unique string that we created to identify the Customer-Profile resource.
     */
    sid: string;
}
export declare class UpdateCustomerProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trusthubV1CustomerProfile?: shared.TrusthubV1CustomerProfile;
}
