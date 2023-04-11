import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Number details
 */
export declare class NumberDetails extends SpeakeasyBase {
    /**
     * The two character country code in ISO 3166-1 alpha-2 format
     */
    country: string;
    /**
     * An available inbound virtual number.
     */
    msisdn: string;
    /**
     * If you’d like to perform an action on a subaccount, provide the `api_key` of that account here. If you’d like to perform an action on your own account, you do not need to provide this field.
     */
    targetApiKey?: string;
}
