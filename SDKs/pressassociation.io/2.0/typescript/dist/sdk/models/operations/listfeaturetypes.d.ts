import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFeatureTypesSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class ListFeatureTypesRequest extends SpeakeasyBase {
    security: ListFeatureTypesSecurity;
}
export declare class ListFeatureTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listFeatureTypes200ApplicationJSONObject?: Record<string, any>;
}
