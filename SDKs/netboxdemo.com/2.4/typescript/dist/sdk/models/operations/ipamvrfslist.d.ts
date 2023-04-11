import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamVrfsListRequest extends SpeakeasyBase {
    enforceUnique?: string;
    /**
     * Multiple values may be separated by commas.
     */
    idIn?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    name?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    q?: string;
    rd?: string;
    tag?: string;
    tenant?: string;
    tenantId?: string;
}
export declare class IpamVrfsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Vrf[];
}
export declare class IpamVrfsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    ipamVrfsList200ApplicationJSONObject?: IpamVrfsList200ApplicationJSON;
}
