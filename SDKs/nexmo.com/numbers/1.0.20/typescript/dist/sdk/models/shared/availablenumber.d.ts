import { SpeakeasyBase } from "../../../internal/utils";
export declare class Availablenumber extends SpeakeasyBase {
    /**
     * The monthly rental cost for this number, in Euros
     */
    cost?: string;
    /**
     * The two character country code in ISO 3166-1 alpha-2 format
     */
    country?: string;
    /**
     * The capabilities of the number: `SMS` or `VOICE` or `SMS,VOICE` or `SMS,MMS` or `VOICE,MMS` or `SMS,MMS,VOICE`
     */
    features?: string[];
    /**
     * An available inbound virtual number.
     */
    msisdn?: string;
    /**
     * The type of number: `landline`, `landline-toll-free` or `mobile-lvn`
     */
    type?: string;
}
