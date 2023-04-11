import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class DeveloperToken extends SpeakeasyBase {
    /**
     * The id of the developer connecting their Stripe account
     */
    developerId: string;
    /**
     * The time (in milliseconds) when this URL expires
     */
    expires: number;
    /**
     * The URL that this developer can use to connect their Stripe account
     */
    targetUrl: string;
}
