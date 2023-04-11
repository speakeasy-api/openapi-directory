import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFeatureSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class GetFeatureRequest extends SpeakeasyBase {
    /**
     * The identifier for the selected feature.
     */
    featureId: string;
}
export declare class GetFeatureResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getFeature200ApplicationJSONObject?: Record<string, any>;
}
