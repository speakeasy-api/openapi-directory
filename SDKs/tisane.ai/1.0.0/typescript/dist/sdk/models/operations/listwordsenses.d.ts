import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListWordSensesRequest extends SpeakeasyBase {
    /**
     * {{apiKeyDescription}}
     */
    ocpApimSubscriptionKey?: string;
    /**
     * (Required) a standard culture code (ISO-639 language code with an optional country extension)
     */
    language?: string;
    /**
     * (Required) the word to inspect
     */
    word?: string;
}
export declare class ListWordSenses200ApplicationJSONFamilies extends SpeakeasyBase {
    key?: number;
    value?: Record<string, any>;
    definition?: string;
}
export declare class ListWordSenses200ApplicationJSONFeatures extends SpeakeasyBase {
    index?: number;
    type?: string;
    value?: string;
}
export declare class ListWordSenses200ApplicationJSON extends SpeakeasyBase {
    families?: ListWordSenses200ApplicationJSONFamilies[];
    features?: ListWordSenses200ApplicationJSONFeatures[];
    frequency?: number;
    isLemma?: boolean;
    legacyMapId?: number;
    lemma?: string;
    lexemeId?: number;
}
export declare class ListWordSensesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Interpretations of "couscous"
     */
    listWordSenses200ApplicationJSONObjects?: ListWordSenses200ApplicationJSON[];
}
