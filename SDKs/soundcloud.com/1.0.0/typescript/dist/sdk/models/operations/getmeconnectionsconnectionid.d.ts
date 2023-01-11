import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeConnectionsConnectionIdPathParams extends SpeakeasyBase {
    connectionId: number;
}
export declare class GetMeConnectionsConnectionIdSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class GetMeConnectionsConnectionIdRequest extends SpeakeasyBase {
    pathParams: GetMeConnectionsConnectionIdPathParams;
    security: GetMeConnectionsConnectionIdSecurity;
}
export declare class GetMeConnectionsConnectionIdResponse extends SpeakeasyBase {
    connection?: shared.Connection;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
