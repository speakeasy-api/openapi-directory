import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimInventoryItemsListRequest extends SpeakeasyBase {
    assetTag?: string;
    device?: string;
    deviceId?: string;
    discovered?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    manufacturer?: string;
    manufacturerId?: string;
    name?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    parentId?: string;
    partId?: string;
    q?: string;
    serial?: string;
    tag?: string;
}
export declare class DcimInventoryItemsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.InventoryItem[];
}
export declare class DcimInventoryItemsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimInventoryItemsList200ApplicationJSONObject?: DcimInventoryItemsList200ApplicationJSON;
}
