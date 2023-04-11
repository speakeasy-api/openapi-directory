import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAccountsAccountSummaryRequest extends SpeakeasyBase {
    /**
     * Account Number
     */
    account: string;
}
export declare class GetAccountsAccountSummary200ApplicationJSONInfo extends SpeakeasyBase {
    accountCode?: string;
    accountReady?: string;
    accountType?: string;
    cushion?: string;
    dayTradesRemaining?: string;
    dayTradesRemainingT?: string;
    dayTradesRemainingTPlus2?: string;
    dayTradesRemainingTPlus3?: string;
    dayTradesRemainingTPlus4?: string;
    highestSeverity?: string;
    leverageS?: string;
    lookAheadNextChange?: string;
    segmentTitleC?: string;
    segmentTitleS?: string;
    tradingTypeS?: string;
    whatIfPMEnabled?: string;
}
export declare class GetAccountsAccountSummary200ApplicationJSONLedger extends SpeakeasyBase {
    cashBalance?: number;
    cashBalanceFXSegment?: number;
    cashCumQty?: number;
    exchangeRate?: number;
    futureOptionMarketValue?: number;
    futurePNL?: number;
    netDividend?: number;
    netInterest?: number;
    netLiquidation?: number;
    optionMarketValue?: number;
    realizedPNL?: number;
    stockMarketValue?: number;
    totalCashBalance?: number;
    unrealizedPNL?: number;
}
export declare class GetAccountsAccountSummary200ApplicationJSONSummary extends SpeakeasyBase {
    accruedCash?: number;
    accruedCashC?: number;
    accruedCashS?: number;
    accruedDividend?: number;
    accruedDividendC?: number;
    accruedDividendS?: number;
    availableFunds?: number;
    availableFundsC?: number;
    availableFundsS?: number;
    billable?: number;
    billableC?: number;
    billableS?: number;
    buyingPower?: number;
    equityWithLoanValue?: number;
    equityWithLoanValueC?: number;
    equityWithLoanValueS?: number;
    excessLiquidity?: number;
    excessLiquidityC?: number;
    excessLiquidityS?: number;
    fullAvailableFunds?: number;
    fullAvailableFundsC?: number;
    fullAvailableFundsS?: number;
    fullExcessLiquidity?: number;
    fullExcessLiquidityC?: number;
    fullExcessLiquidityS?: number;
    fullInitMarginReq?: number;
    fullInitMarginReqC?: number;
    fullInitMarginReqS?: number;
    fullMaintMarginReq?: number;
    fullMaintMarginReqC?: number;
    fullMaintMarginReqS?: number;
    grossPositionValue?: number;
    grossPositionValueC?: number;
    grossPositionValueS?: number;
    indianStockHaircut?: number;
    indianStockHaircutC?: number;
    indianStockHaircutS?: number;
    initMarginReq?: number;
    initMarginReqC?: number;
    initMarginReqS?: number;
    insuredDeposit?: number;
    insuredDepositC?: number;
    insuredDepositS?: number;
    lookAheadAvailableFunds?: number;
    lookAheadAvailableFundsC?: number;
    lookAheadAvailableFundsS?: number;
    lookAheadExcessLiquidity?: number;
    lookAheadExcessLiquidityC?: number;
    lookAheadExcessLiquidityS?: number;
    lookAheadInitMarginReq?: number;
    lookAheadInitMarginReqC?: number;
    lookAheadInitMarginReqS?: number;
    lookAheadMaintMarginReq?: number;
    lookAheadMaintMarginReqC?: number;
    lookAheadMaintMarginReqS?: number;
    maintMarginReq?: number;
    maintMarginReqC?: number;
    maintMarginReqS?: number;
    netLiquidation?: number;
    netLiquidationC?: number;
    netLiquidationS?: number;
    netLiquidationUncertainty?: number;
    paSharesValue?: number;
    paSharesValueC?: number;
    paSharesValueS?: number;
    postExpirationExcess?: number;
    postExpirationExcessC?: number;
    postExpirationExcessS?: number;
    postExpirationMargin?: number;
    postExpirationMarginC?: number;
    postExpirationMarginS?: number;
    regTEquity?: number;
    regTEquityS?: number;
    regTMargin?: number;
    regTMarginS?: number;
    sma?: number;
    smaS?: number;
    totalCashValue?: number;
    totalCashValueC?: number;
    totalCashValueS?: number;
}
/**
 * Returns object for account summary with multiple properties.
 *
 * @remarks
 * A property is sufficed with -c if it provides commodity value, -s if it provides security value, and -c if its UKL segment value.
 * "These values correspond to the TWS Account Window: https://www.interactivebrokers.com/en/software/tws/usersguidebook/realtimeactivitymonitoring/account_window.htm"
 *
 */
export declare class GetAccountsAccountSummary200ApplicationJSON extends SpeakeasyBase {
    info?: GetAccountsAccountSummary200ApplicationJSONInfo;
    ledger?: GetAccountsAccountSummary200ApplicationJSONLedger[];
    summary?: GetAccountsAccountSummary200ApplicationJSONSummary;
}
export declare class GetAccountsAccountSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns object for account summary with multiple properties.
     *
     * @remarks
     * A property is sufficed with -c if it provides commodity value, -s if it provides security value, and -c if its UKL segment value.
     * "These values correspond to the TWS Account Window: https://www.interactivebrokers.com/en/software/tws/usersguidebook/realtimeactivitymonitoring/account_window.htm"
     *
     */
    getAccountsAccountSummary200ApplicationJSONObject?: GetAccountsAccountSummary200ApplicationJSON;
}
