import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPlatformRegionsPathParams extends SpeakeasyBase {
    platformId: string;
}
export declare class ListPlatformRegionsQueryParams extends SpeakeasyBase {
    aliases?: boolean;
}
export declare class ListPlatformRegionsSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class ListPlatformRegionsRequest extends SpeakeasyBase {
    pathParams: ListPlatformRegionsPathParams;
    queryParams: ListPlatformRegionsQueryParams;
    security: ListPlatformRegionsSecurity;
}
export declare class ListPlatformRegionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listPlatformRegions200ApplicationJSONObject?: Record<string, any>;
}
