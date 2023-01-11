import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResolveQueryParams extends SpeakeasyBase {
    url: string;
}
export declare class GetResolveSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
    clientId: shared.SchemeClientId;
}
export declare class GetResolveRequest extends SpeakeasyBase {
    queryParams: GetResolveQueryParams;
    security: GetResolveSecurity;
}
export declare class GetResolveResponse extends SpeakeasyBase {
    contentType: string;
    found?: shared.Found;
    statusCode: number;
}
