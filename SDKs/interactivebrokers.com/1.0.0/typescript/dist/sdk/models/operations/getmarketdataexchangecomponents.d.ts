import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMarketdataExchangeComponents200ApplicationJSONMapping extends SpeakeasyBase {
    bit?: number;
    code?: string;
    exchange?: string;
}
export declare class GetMarketdataExchangeComponents200ApplicationJSON extends SpeakeasyBase {
    complete?: boolean;
    conId?: number;
    mapping?: GetMarketdataExchangeComponents200ApplicationJSONMapping[];
}
export declare class GetMarketdataExchangeComponentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Exchange Components
     */
    getMarketdataExchangeComponents200ApplicationJSONObjects?: GetMarketdataExchangeComponents200ApplicationJSON[];
}
