import { SpeakeasyBase } from "../../../internal/utils";
export declare class Member extends SpeakeasyBase {
    bio?: string;
    birthday?: string;
    company?: string;
    /**
     * The member's DEV username
     */
    devto?: string;
    /**
     * The member's email
     */
    email?: string;
    /**
     * The member's GitHub username
     */
    github?: string;
    /**
     * The member's LinkedIn username, without the in/ or pub/
     */
    linkedin?: string;
    location?: string;
    name?: string;
    pronouns?: string;
    shippingAddress?: string;
    slug?: string;
    /**
     * Deprecated: Please use the tags attribute instead
     */
    tagList?: string;
    /**
     * Replaces all tags for the member; comma-separated string or array
     */
    tags?: string;
    /**
     * Adds tags to member; comma-separated string or array
     */
    tagsToAdd?: string;
    teammate?: boolean;
    title?: string;
    tshirt?: string;
    /**
     * The member's Twitter username
     */
    twitter?: string;
    url?: string;
}
