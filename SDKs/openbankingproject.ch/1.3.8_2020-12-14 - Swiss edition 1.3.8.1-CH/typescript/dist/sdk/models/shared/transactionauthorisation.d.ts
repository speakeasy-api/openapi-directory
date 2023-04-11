import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Content of the body of a transaction authorisation request
 *
 * @remarks
 *
 */
export declare class TransactionAuthorisation extends SpeakeasyBase {
    /**
     * SCA authentication data, depending on the chosen authentication method.
     *
     * @remarks
     * If the data is binary, then it is base64 encoded.
     *
     */
    scaAuthenticationData: string;
}
