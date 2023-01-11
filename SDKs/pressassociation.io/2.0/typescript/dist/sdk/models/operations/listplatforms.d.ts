import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPlatformsQueryParams extends SpeakeasyBase {
    aliases?: boolean;
}
export declare class ListPlatformsSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class ListPlatformsRequest extends SpeakeasyBase {
    queryParams: ListPlatformsQueryParams;
    security: ListPlatformsSecurity;
}
export declare class ListPlatformsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listPlatforms200ApplicationJSONObject?: Record<string, any>;
}
