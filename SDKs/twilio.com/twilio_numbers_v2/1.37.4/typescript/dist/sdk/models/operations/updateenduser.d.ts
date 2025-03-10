import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateEndUserServerList: readonly ["https://numbers.twilio.com"];
export declare class UpdateEndUserPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateEndUserUpdateEndUserRequest extends SpeakeasyBase {
    attributes?: any;
    friendlyName?: string;
}
export declare class UpdateEndUserSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateEndUserRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: UpdateEndUserPathParams;
    request?: UpdateEndUserUpdateEndUserRequest;
    security: UpdateEndUserSecurity;
}
export declare class UpdateEndUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    numbersV2RegulatoryComplianceEndUser?: shared.NumbersV2RegulatoryComplianceEndUser;
}
