import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlatformPathParams extends SpeakeasyBase {
    platformId: string;
}
export declare class GetPlatformSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class GetPlatformRequest extends SpeakeasyBase {
    pathParams: GetPlatformPathParams;
    security: GetPlatformSecurity;
}
export declare class GetPlatformResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPlatform200ApplicationJSONObject?: Record<string, any>;
}
