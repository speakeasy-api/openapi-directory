import { SpeakeasyBase } from "../../../internal/utils";
export declare class SimulateAnAuthorizationOnACardParameters extends SpeakeasyBase {
    /**
     * The authorization amount in cents.
     */
    amount: number;
    /**
     * The identifier of the Card to be authorized.
     */
    cardId?: string;
    /**
     * The identifier of the Digital Wallet Token to be authorized.
     */
    digitalWalletTokenId?: string;
}
