import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListFeatureValuesRequest extends SpeakeasyBase {
    /**
     * {{apiKeyDescription}}
     */
    ocpApimSubscriptionKey?: string;
    /**
     * (Required) Feature list name (localized)
     */
    description?: string;
    /**
     * (Required) Language code
     */
    language?: string;
    /**
     * (Required) Feature type
     */
    type?: string;
}
export declare class ListFeatureValuesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List entity subtypes
     */
    listFeatureValues200ApplicationJSONStrings?: string[];
}
