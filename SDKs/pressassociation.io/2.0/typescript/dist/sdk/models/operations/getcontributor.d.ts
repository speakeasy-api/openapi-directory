import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetContributorSecurity extends SpeakeasyBase {
    apikey: string;
}
export declare class GetContributorRequest extends SpeakeasyBase {
    /**
     * Flag to display Legacy and Provider Ids.
     */
    aliases?: boolean;
    /**
     * Filter the schedule items by contributor ID
     */
    contributorId: string;
}
export declare class GetContributorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getContributor200ApplicationJSONObject?: Record<string, any>;
}
