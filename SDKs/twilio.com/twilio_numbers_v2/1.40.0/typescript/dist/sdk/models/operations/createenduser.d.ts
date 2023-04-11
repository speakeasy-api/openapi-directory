import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateEndUserServerList: readonly ["https://numbers.twilio.com"];
export declare class CreateEndUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateEndUserCreateEndUserRequest extends SpeakeasyBase {
    /**
     * The set of parameters that are the attributes of the End User resource which are derived End User Types.
     */
    attributes?: any;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName: string;
    type: shared.EndUserEnumTypeEnum;
}
export declare class CreateEndUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    numbersV2RegulatoryComplianceEndUser?: shared.NumbersV2RegulatoryComplianceEndUser;
}
