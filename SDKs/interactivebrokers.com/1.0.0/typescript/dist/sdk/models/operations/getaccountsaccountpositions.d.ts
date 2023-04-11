import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAccountsAccountPositionsRequest extends SpeakeasyBase {
    /**
     * Account Number
     */
    account: string;
}
export declare class GetAccountsAccountPositions200ApplicationJSON extends SpeakeasyBase {
    averageCost?: number;
    contractId?: number;
    position?: number;
}
export declare class GetAccountsAccountPositionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns a list of positions for the indicated account
     */
    getAccountsAccountPositions200ApplicationJSONObjects?: GetAccountsAccountPositions200ApplicationJSON[];
}
