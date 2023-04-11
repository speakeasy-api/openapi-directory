import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchItemAssignmentServerList: readonly ["https://numbers.twilio.com"];
export declare class FetchItemAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchItemAssignmentRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Bundle resource.
     */
    bundleSid: string;
    /**
     * The unique string that we created to identify the Identity resource.
     */
    sid: string;
}
export declare class FetchItemAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    numbersV2RegulatoryComplianceBundleItemAssignment?: shared.NumbersV2RegulatoryComplianceBundleItemAssignment;
}
