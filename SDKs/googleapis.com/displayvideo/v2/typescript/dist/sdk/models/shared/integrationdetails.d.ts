import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Integration details of an entry.
 */
export declare class IntegrationDetails extends SpeakeasyBase {
    /**
     * Additional details of the entry in string format. Must be UTF-8 encoded with a length of no more than 1000 characters.
     */
    details?: string;
    /**
     * An external identifier to be associated with the entry. The integration code will show up together with the entry in many places in the system, for example, reporting. Must be UTF-8 encoded with a length of no more than 500 characters.
     */
    integrationCode?: string;
}
