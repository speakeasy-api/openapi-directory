import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSubPartnerBalanceRequest extends SpeakeasyBase {
    id: string;
    xApiKey?: string;
}
export declare class GetSubPartnerBalance200ApplicationJSONResultBalancesUsddtrc20 extends SpeakeasyBase {
    amount?: number;
    pendingAmount?: number;
}
export declare class GetSubPartnerBalance200ApplicationJSONResultBalancesUsdtbsc extends SpeakeasyBase {
    amount?: number;
    pendingAmount?: number;
}
export declare class GetSubPartnerBalance200ApplicationJSONResultBalances extends SpeakeasyBase {
    usddtrc20?: GetSubPartnerBalance200ApplicationJSONResultBalancesUsddtrc20;
    usdtbsc?: GetSubPartnerBalance200ApplicationJSONResultBalancesUsdtbsc;
}
export declare class GetSubPartnerBalance200ApplicationJSONResult extends SpeakeasyBase {
    balances?: GetSubPartnerBalance200ApplicationJSONResultBalances;
    subPartnerId?: string;
}
/**
 * 200
 */
export declare class GetSubPartnerBalance200ApplicationJSON extends SpeakeasyBase {
    result?: GetSubPartnerBalance200ApplicationJSONResult;
}
export declare class GetSubPartnerBalanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * 200
     */
    getSubPartnerBalance200ApplicationJSONObject?: GetSubPartnerBalance200ApplicationJSON;
}
