import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserStatsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUserStatsSecurity extends SpeakeasyBase {
    mwoAuth: shared.SchemeMwoAuth;
}
export declare class GetUserStatsRequest extends SpeakeasyBase {
    pathParams: GetUserStatsPathParams;
    security: GetUserStatsSecurity;
}
export declare class GetUserStatsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    stats?: shared.Stats;
    statusCode: number;
}
