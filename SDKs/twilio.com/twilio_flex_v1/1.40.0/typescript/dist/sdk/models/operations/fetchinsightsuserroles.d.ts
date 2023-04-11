import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchInsightsUserRolesServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchInsightsUserRolesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchInsightsUserRolesRequest extends SpeakeasyBase {
    /**
     * The Authorization HTTP request header
     */
    authorization?: string;
}
export declare class FetchInsightsUserRolesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    flexV1InsightsUserRoles?: shared.FlexV1InsightsUserRoles;
}
