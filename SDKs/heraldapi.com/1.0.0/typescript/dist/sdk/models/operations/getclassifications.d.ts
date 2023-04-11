import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClassificationsRequest extends SpeakeasyBase {
    /**
     * Used to limit the amount of classification results per page.
     */
    limit?: number;
    /**
     * Used to query on 2017 NAICS codes. Can be queried by any 2-digit to 6-digit NAICS codes. Supports multiple queries.
     */
    naics2017?: string;
    /**
     * Used to paginate between pages of results. Default is page 1.
     */
    page?: number;
    /**
     * Used to query on classification descriptions, as defined in 2017 NAICS. Powered by elastic search.
     */
    search?: string;
}
/**
 * Bad Request: something was wrong with the included query param(s)
 */
export declare class GetClassifications400ApplicationJSON extends SpeakeasyBase {
    errors?: shared.ErrorV1[];
}
/**
 * OK
 */
export declare class GetClassifications200ApplicationJSON extends SpeakeasyBase {
    classifications?: shared.ClassificationV1[];
}
export declare class GetClassificationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getClassifications200ApplicationJSONObject?: GetClassifications200ApplicationJSON;
    /**
     * Bad Request: something was wrong with the included query param(s)
     */
    getClassifications400ApplicationJSONObject?: GetClassifications400ApplicationJSON;
}
