import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFeaturePathParams extends SpeakeasyBase {
    featureId: string;
}
export declare class GetFeatureSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class GetFeatureRequest extends SpeakeasyBase {
    pathParams: GetFeaturePathParams;
    security: GetFeatureSecurity;
}
export declare class GetFeatureResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getFeature200ApplicationJSONObject?: Record<string, any>;
}
