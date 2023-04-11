import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteCustomerProfileServerList: readonly ["https://trusthub.twilio.com"];
export declare class DeleteCustomerProfileSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteCustomerProfileRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Customer-Profile resource.
     */
    sid: string;
}
export declare class DeleteCustomerProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
