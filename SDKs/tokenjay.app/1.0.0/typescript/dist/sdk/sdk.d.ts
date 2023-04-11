import { AgeUsd } from "./ageusd";
import { BabelFeeController } from "./babelfeecontroller";
import { BabelFeeNewOfferController } from "./babelfeenewoffercontroller";
import { BoxConsolidationController } from "./boxconsolidationcontroller";
import { PaymentPortal } from "./paymentportal";
import { PeerDetection } from "./peerdetection";
import { TokenBurnController } from "./tokenburncontroller";
import { TokenPrices } from "./tokenprices";
import { TokenVerification } from "./tokenverification";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.tokenjay.app/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Please see usage policies on tokenjay.app
 */
export declare class SDK {
    ageUsd: AgeUsd;
    babelFeeController: BabelFeeController;
    babelFeeNewOfferController: BabelFeeNewOfferController;
    boxConsolidationController: BoxConsolidationController;
    /**
     * ErgoPay payment portal
     */
    paymentPortal: PaymentPortal;
    /**
     * Detecting nodes to use for submitting transactions
     */
    peerDetection: PeerDetection;
    tokenBurnController: TokenBurnController;
    tokenPrices: TokenPrices;
    /**
     * Ergo Platform Genuine Tokens Verification
     *
     * @see {@link https://github.com/ergoplatform/eips/blob/master/eip-0021.md} - EIP-21
     */
    tokenVerification: TokenVerification;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
