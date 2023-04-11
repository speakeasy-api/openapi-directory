import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Number transfer response
 */
export declare class TransferNumberResponse extends SpeakeasyBase {
    /**
     * The two character country code in ISO 3166-1 alpha-2 format
     */
    country?: string;
    /**
     * Account the number is transferred from
     */
    from?: string;
    /**
     * Number transfered
     */
    number?: string;
    /**
     * Account the number is transferred to
     */
    to?: string;
}
