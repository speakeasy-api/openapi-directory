import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created.
 */
export declare class MessengerAccountResponse extends SpeakeasyBase {
    /**
     * The provider access token
     */
    accessToken: string;
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
     * The provider (will be `messenger`).
     */
    provider: string;
}
