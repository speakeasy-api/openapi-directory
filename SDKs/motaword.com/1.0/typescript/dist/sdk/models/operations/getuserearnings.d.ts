import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserEarningsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUserEarningsSecurity extends SpeakeasyBase {
    mwoAuth: shared.SchemeMwoAuth;
}
export declare class GetUserEarningsRequest extends SpeakeasyBase {
    pathParams: GetUserEarningsPathParams;
    security: GetUserEarningsSecurity;
}
export declare class GetUserEarningsResponse extends SpeakeasyBase {
    contentType: string;
    earnings?: shared.Earnings;
    error?: shared.ErrorT;
    statusCode: number;
}
