import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object containing address info
 */
export declare class GetAddressResponse extends SpeakeasyBase {
    /**
     * Address in string form
     */
    addrStr?: string;
    /**
     * NEBL balance
     */
    balance?: number;
    /**
     * NEBL balance in satoshis
     */
    balanceSat?: number;
    /**
     * Total NEBL received
     */
    totalReceived?: number;
    /**
     * Total NEBL received in satoshis
     */
    totalReceivedSat?: number;
    /**
     * Total NEBL sent
     */
    totalSent?: number;
    /**
     * Total NEBL sent satoshis
     */
    totalSentSat?: number;
    /**
     * Array of transaction ids for this address
     */
    transactions?: string[];
    /**
     * Number of transactions for this address
     */
    txAppearances?: number;
    /**
     * Unconfirmed NEBL balance
     */
    unconfirmedBalance?: number;
    /**
     * Unconfirmed NEBL balance in satoshis
     */
    unconfirmedBalanceSat?: number;
    /**
     * Number of unconfirmed transactions for this address
     */
    unconfirmedTxAppearances?: number;
}
