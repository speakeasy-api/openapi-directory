import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeFavoritesIdsQueryParams extends SpeakeasyBase {
    limit?: number;
}
export declare class GetMeFavoritesIdsSecurity extends SpeakeasyBase {
    authHeader: shared.SchemeAuthHeader;
}
export declare class GetMeFavoritesIdsRequest extends SpeakeasyBase {
    queryParams: GetMeFavoritesIdsQueryParams;
    security: GetMeFavoritesIdsSecurity;
}
export declare class GetMeFavoritesIdsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
