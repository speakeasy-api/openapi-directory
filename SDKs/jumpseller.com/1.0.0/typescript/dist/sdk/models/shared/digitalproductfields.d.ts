import { SpeakeasyBase } from "../../../internal/utils";
export declare class DigitalProductFields extends SpeakeasyBase {
    /**
     * Time left in seconds before the current private URL expires
     */
    expirationSeconds?: number;
    /**
     * Unique identifier of the digital product
     */
    id?: number;
    /**
     * Private URL of the digital product
     */
    url?: string;
}
