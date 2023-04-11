import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Purolator account information request body
 */
export declare class ConnectPurolatorRequestBody extends SpeakeasyBase {
    /**
     * Account number
     */
    accountNumber: string;
    /**
     * Activation key
     */
    activationKey: string;
    /**
     * Nickname
     */
    nickname: string;
}
