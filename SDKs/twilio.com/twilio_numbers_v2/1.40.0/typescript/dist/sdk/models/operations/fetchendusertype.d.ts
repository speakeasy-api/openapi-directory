import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchEndUserTypeServerList: readonly ["https://numbers.twilio.com"];
export declare class FetchEndUserTypeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchEndUserTypeRequest extends SpeakeasyBase {
    /**
     * The unique string that identifies the End-User Type resource.
     */
    sid: string;
}
export declare class FetchEndUserTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    numbersV2RegulatoryComplianceEndUserType?: shared.NumbersV2RegulatoryComplianceEndUserType;
}
