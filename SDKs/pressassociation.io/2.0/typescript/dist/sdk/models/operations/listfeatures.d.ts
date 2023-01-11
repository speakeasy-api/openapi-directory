import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFeaturesQueryParams extends SpeakeasyBase {
    date?: string;
    end?: string;
    start?: string;
    type?: string;
}
export declare class ListFeaturesSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class ListFeaturesRequest extends SpeakeasyBase {
    queryParams: ListFeaturesQueryParams;
    security: ListFeaturesSecurity;
}
export declare class ListFeaturesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listFeatures200ApplicationJSONObject?: Record<string, any>;
}
