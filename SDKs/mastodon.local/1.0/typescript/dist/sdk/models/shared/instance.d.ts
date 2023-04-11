import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * Represents the software instance of Mastodon running on this domain.
 *
 * @see {@link https://docs.joinmastodon.org/entities/instance/}
 */
export declare class Instance extends SpeakeasyBase {
    /**
     * Whether registrations require moderator approval.
     */
    approvalRequired: boolean;
    /**
     * Represents a user of Mastodon and their associated profile.
     */
    contactAccount?: Account;
    /**
     * Admin-defined description of the Mastodon site.
     */
    description: string;
    /**
     * An email that may be contacted for any inquiries.
     */
    email: string;
    /**
     * Whether invites are enabled.
     */
    invitesEnabled: boolean;
    /**
     * Primary languages of the website and its staff. ISO 639 Part 1-5 language codes.
     */
    languages: string[];
    /**
     * Whether registrations are enabled.
     */
    registrations: boolean;
    /**
     * A shorter description defined by the admin.
     */
    shortDescription: string;
    /**
     * Statistics about how much information the instance contains.
     */
    stats: Record<string, any>;
    /**
     * Banner image for the website.
     */
    thumbnail?: string;
    /**
     * The title of the website.
     */
    title: string;
    /**
     * The domain name of the instance.
     */
    uri: string;
    /**
     * URLs of interest for clients apps.
     */
    urls: Record<string, any>;
    /**
     * The version of Mastodon installed on the instance.
     */
    version: string;
}
