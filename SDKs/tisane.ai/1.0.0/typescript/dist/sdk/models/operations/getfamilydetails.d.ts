import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFamilyDetailsRequest extends SpeakeasyBase {
    /**
     * {{apiKeyDescription}}
     */
    ocpApimSubscriptionKey?: string;
    /**
     * (Required) a numeric identifier of the family
     */
    id?: string;
}
/**
 * Details of the family for 'plot twist'
 */
export declare class GetFamilyDetails200ApplicationJSON extends SpeakeasyBase {
    definition?: string;
    description?: string;
    hypernyms?: number[][];
    permId?: string;
    requestId?: string;
    wikidata?: string;
    wordnet30?: string;
}
export declare class GetFamilyDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Details of the family for 'plot twist'
     */
    getFamilyDetails200ApplicationJSONObject?: GetFamilyDetails200ApplicationJSON;
}
