import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an email address, a profile on networks like github and twitter, or a record in another system.
 */
export declare class Identity extends SpeakeasyBase {
    /**
     * The email of the person in the source system
     */
    email?: string;
    /**
     * The name of the person in the source system
     */
    name?: string;
    /**
     * The type of source: known values include github, twitter, discourse, email, linkedin, devto. Custom values can also be used
     */
    source: string;
    /**
     * Specifies the location of the source, such as the host of a Discourse instance
     */
    sourceHost?: string;
    /**
     * The uid of the person in the source system
     */
    uid?: string;
    /**
     * For custom identities, an optional link to the profile on the source system
     */
    url?: string;
    /**
     * The username of the person in the source system
     */
    username?: string;
}
