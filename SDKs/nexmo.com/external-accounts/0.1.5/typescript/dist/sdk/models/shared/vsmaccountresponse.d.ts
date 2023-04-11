import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK.
 */
export declare class VSMAccountResponse extends SpeakeasyBase {
    /**
     * The external api key for this account
     */
    apiKey: string;
    /**
     * The array of associated application ids
     */
    applications?: string[];
    /**
     * The external identifier for this account
     */
    externalId: string;
    /**
     * The account name
     */
    name?: string;
    /**
     * The provider (will be `viber_service_msg`).
     */
    provider: string;
}
