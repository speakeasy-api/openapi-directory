import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCompanyTimeOffTypesRequest extends SpeakeasyBase {
    /**
     * Pagination attribute to limit how many records will be returned per page
     */
    limit?: number;
    /**
     * Pagination attribute to identify which page you are requesting, by the form of telling an offset from the first record that would be returned.
     */
    offset?: number;
}
export declare class GetCompanyTimeOffTypes200ApplicationJSON extends SpeakeasyBase {
    data?: shared.TimeOffTypeResource[];
    success?: boolean;
}
export declare class GetCompanyTimeOffTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getCompanyTimeOffTypes200ApplicationJSONObject?: GetCompanyTimeOffTypes200ApplicationJSON;
}
