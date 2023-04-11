import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2BroadcastservicesSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
/**
 * The sort order of the list of broadcast services, based on broadcast service ID. If unspecified, the broadcast services are returned in random order. If using paging to iterate through the results, sort order should be specified.
 */
export declare enum GetApiV2BroadcastservicesOrderByIDEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetApiV2BroadcastservicesRequest extends SpeakeasyBase {
    /**
     * The sort order of the list of broadcast services, based on broadcast service ID. If unspecified, the broadcast services are returned in random order. If using paging to iterate through the results, sort order should be specified.
     */
    orderById?: GetApiV2BroadcastservicesOrderByIDEnum;
    /**
     * The number of items to return. Must be between 0 and 500, inclusive.
     */
    pageSize?: number;
    /**
     * The start page of the results to return. The first item is indexed at 0.
     */
    pageStart?: number;
}
export declare class GetApiV2BroadcastservicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The matching broadcast services.
     */
    episodes?: shared.Episode[];
    /**
     * The request is missing required data or invalid.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
