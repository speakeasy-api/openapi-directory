import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminDeleteImpersonationOAuthTokenRequest extends SpeakeasyBase {
    username: string;
}
export declare class EnterpriseAdminDeleteImpersonationOAuthTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
