import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserPopularPairsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUserPopularPairsSecurity extends SpeakeasyBase {
    mwoAuth: shared.SchemeMwoAuth;
}
export declare class GetUserPopularPairsRequest extends SpeakeasyBase {
    pathParams: GetUserPopularPairsPathParams;
    security: GetUserPopularPairsSecurity;
}
export declare class GetUserPopularPairsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    popularLanguagePairs?: shared.PopularLanguagePairs;
    statusCode: number;
}
