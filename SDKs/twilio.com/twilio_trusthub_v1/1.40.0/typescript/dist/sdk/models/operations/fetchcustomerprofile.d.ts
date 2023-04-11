import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCustomerProfileServerList: readonly ["https://trusthub.twilio.com"];
export declare class FetchCustomerProfileSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCustomerProfileRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Customer-Profile resource.
     */
    sid: string;
}
export declare class FetchCustomerProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trusthubV1CustomerProfile?: shared.TrusthubV1CustomerProfile;
}
