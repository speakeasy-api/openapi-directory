import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateEndUserServerList: readonly ["https://numbers.twilio.com"];
export declare class UpdateEndUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateEndUserUpdateEndUserRequest extends SpeakeasyBase {
    /**
     * The set of parameters that are the attributes of the End User resource which are derived End User Types.
     */
    attributes?: any;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
}
export declare class UpdateEndUserRequest extends SpeakeasyBase {
    requestBody?: UpdateEndUserUpdateEndUserRequest;
    /**
     * The unique string created by Twilio to identify the End User resource.
     */
    sid: string;
}
export declare class UpdateEndUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    numbersV2RegulatoryComplianceEndUser?: shared.NumbersV2RegulatoryComplianceEndUser;
}
