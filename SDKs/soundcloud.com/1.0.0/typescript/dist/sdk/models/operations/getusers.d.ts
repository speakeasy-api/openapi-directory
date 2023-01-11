import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersQueryParams extends SpeakeasyBase {
    ids?: string;
    limit?: number;
    linkedPartitioning?: boolean;
    offset?: number;
    q: string;
}
export declare class GetUsersSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class GetUsersRequest extends SpeakeasyBase {
    queryParams: GetUsersQueryParams;
    security: GetUsersSecurity;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getUsers200ApplicationJSONOneOf?: any;
}
