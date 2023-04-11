import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Developer Account
 */
export declare class DeveloperAccount extends SpeakeasyBase {
    /**
     * A custom JSON object that you can create and attach to this record
     */
    customData?: Record<string, any>;
    /**
     * The id of this developer account
     */
    developerAccountId: string;
    /**
     * The id of the developer that this account belongs to
     */
    developerId: string;
    /**
     * The contact email address
     */
    email?: string;
    /**
     * The name for the account
     */
    name?: string;
}
