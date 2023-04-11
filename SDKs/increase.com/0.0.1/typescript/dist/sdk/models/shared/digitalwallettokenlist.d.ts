import { SpeakeasyBase } from "../../../internal/utils";
import { DigitalWalletToken } from "./digitalwallettoken";
/**
 * A list of Digital Wallet Token objects
 */
export declare class DigitalWalletTokenList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: DigitalWalletToken[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
