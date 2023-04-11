import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateItemAssignmentServerList: readonly ["https://numbers.twilio.com"];
export declare class CreateItemAssignmentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateItemAssignmentCreateItemAssignmentRequest extends SpeakeasyBase {
    /**
     * The SID of an object bag that holds information of the different items.
     */
    objectSid: string;
}
export declare class CreateItemAssignmentRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Bundle resource.
     */
    bundleSid: string;
    requestBody?: CreateItemAssignmentCreateItemAssignmentRequest;
}
export declare class CreateItemAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    numbersV2RegulatoryComplianceBundleItemAssignment?: shared.NumbersV2RegulatoryComplianceBundleItemAssignment;
}
