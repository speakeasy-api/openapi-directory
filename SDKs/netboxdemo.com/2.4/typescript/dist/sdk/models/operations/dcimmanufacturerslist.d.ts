import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimManufacturersListRequest extends SpeakeasyBase {
    /**
     * Number of results to return per page.
     */
    limit?: number;
    name?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    slug?: string;
}
export declare class DcimManufacturersList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Manufacturer[];
}
export declare class DcimManufacturersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimManufacturersList200ApplicationJSONObject?: DcimManufacturersList200ApplicationJSON;
}
