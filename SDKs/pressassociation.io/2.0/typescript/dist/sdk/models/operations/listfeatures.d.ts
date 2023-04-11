import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListFeaturesSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class ListFeaturesRequest extends SpeakeasyBase {
    /**
     * Date of the collection of feature items.
     */
    date?: string;
    /**
     * End date for a range of features.
     */
    end?: string;
    /**
     * Start date for a range of features.
     */
    start?: string;
    /**
     * The namespace of the feature type.
     */
    type?: string;
}
export declare class ListFeaturesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    listFeatures200ApplicationJSONObject?: Record<string, any>;
}
