import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConnectQueryParams extends SpeakeasyBase {
    clientId: string;
    redirectUri: string;
    responseType: shared.ResponseTypeEnum;
    scope: string;
    state?: string;
}
export declare class GetConnectSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class GetConnectRequest extends SpeakeasyBase {
    queryParams: GetConnectQueryParams;
    security: GetConnectSecurity;
}
export declare class GetConnectResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getConnect302ApplicationJSONString?: string;
}
