import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A valid JSON object with information detailing the context of the audit event.
 */
export declare class ContextNumberLinking extends SpeakeasyBase {
    /**
     * Which account the number is associated with
     */
    account?: string;
    /**
     * UUID of the app the number is being linked/unlinked to
     */
    applicationId?: string;
    /**
     * The country of the number
     */
    country?: string;
    /**
     * The phone number linked/unlinked to your application
     */
    msisdn?: string;
}
