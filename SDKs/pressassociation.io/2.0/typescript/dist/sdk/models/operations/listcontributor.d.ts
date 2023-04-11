import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListContributorSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class ListContributorRequest extends SpeakeasyBase {
    /**
     * Flag to display Legacy and Provider Ids.
     */
    aliases?: boolean;
    /**
     * Limit the the number of items to be returned per page. For example: 5.
     */
    limit?: number;
    /**
     * Updated After
     */
    updatedAfter?: string;
}
export declare class ListContributorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    listContributor200ApplicationJSONObject?: Record<string, any>;
}
