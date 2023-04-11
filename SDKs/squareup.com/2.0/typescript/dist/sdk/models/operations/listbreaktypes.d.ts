import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListBreakTypesSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListBreakTypesRequest extends SpeakeasyBase {
    /**
     * A pointer to the next page of `BreakType` results to fetch.
     */
    cursor?: string;
    /**
     * The maximum number of `BreakType` results to return per page. The number can range between 1
     *
     * @remarks
     * and 200. The default is 200.
     */
    limit?: number;
    /**
     * Filter the returned `BreakType` results to only those that are associated with the
     *
     * @remarks
     * specified location.
     */
    locationId?: string;
}
export declare class ListBreakTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listBreakTypesResponse?: shared.ListBreakTypesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
