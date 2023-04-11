import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON Body of a establish signing basket request.
 *
 * @remarks
 * The body shall contain at least one entry.
 *
 */
export declare class SigningBasket extends SpeakeasyBase {
    /**
     * A list of consentIds.
     */
    consentIds?: string[];
    /**
     * A list of paymentIds.
     */
    paymentIds?: string[];
}
