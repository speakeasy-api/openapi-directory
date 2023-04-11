import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListHypernymsRequest extends SpeakeasyBase {
    /**
     * {{apiKeyDescription}}
     */
    ocpApimSubscriptionKey?: string;
    /**
     * (Required) a numeric identifier of the family
     */
    family?: string;
    /**
     * (Required) maximum distance from the family
     */
    maxLevel?: string;
}
export declare class ListHypernymsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Hypernyms of Darth Vader
     */
    listHypernyms200ApplicationJSONArrays?: any[][];
}
