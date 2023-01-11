import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserProjectStatsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUserProjectStatsSecurity extends SpeakeasyBase {
    mwoAuth: shared.SchemeMwoAuth;
}
export declare class GetUserProjectStatsRequest extends SpeakeasyBase {
    pathParams: GetUserProjectStatsPathParams;
    security: GetUserProjectStatsSecurity;
}
export declare class GetUserProjectStatsResponse extends SpeakeasyBase {
    clientProjectStats?: shared.ClientProjectStats;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
