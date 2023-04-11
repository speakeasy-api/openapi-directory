import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListInflectedFormsRequest extends SpeakeasyBase {
    /**
     * {{apiKeyDescription}}
     */
    ocpApimSubscriptionKey?: string;
    /**
     * (Required) The family to inspect
     */
    family?: string;
    /**
     * (Required) The language code
     */
    language?: string;
    /**
     * (Required) The lexeme to inspect
     */
    lexeme?: string;
}
export declare class ListInflectedForms200ApplicationJSONFeatures extends SpeakeasyBase {
    index?: number;
    value?: string;
}
export declare class ListInflectedForms200ApplicationJSON extends SpeakeasyBase {
    features?: ListInflectedForms200ApplicationJSONFeatures[];
    isLemma?: boolean;
    text?: string;
}
export declare class ListInflectedFormsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Inflected forms of "United States" in Russian
     */
    listInflectedForms200ApplicationJSONObjects?: ListInflectedForms200ApplicationJSON[];
}
