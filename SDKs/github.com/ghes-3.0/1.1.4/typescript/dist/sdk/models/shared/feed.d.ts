import { SpeakeasyBase } from "../../../internal/utils";
import { LinkWithType } from "./linkwithtype";
export declare class FeedLinks extends SpeakeasyBase {
    /**
     * Hypermedia Link with Type
     */
    currentUser?: LinkWithType;
    /**
     * Hypermedia Link with Type
     */
    currentUserActor?: LinkWithType;
    /**
     * Hypermedia Link with Type
     */
    currentUserOrganization?: LinkWithType;
    currentUserOrganizations?: LinkWithType[];
    /**
     * Hypermedia Link with Type
     */
    currentUserPublic?: LinkWithType;
    /**
     * Hypermedia Link with Type
     */
    securityAdvisories?: LinkWithType;
    /**
     * Hypermedia Link with Type
     */
    timeline: LinkWithType;
    /**
     * Hypermedia Link with Type
     */
    user: LinkWithType;
}
/**
 * Feed
 */
export declare class Feed extends SpeakeasyBase {
    links: FeedLinks;
    currentUserActorUrl?: string;
    currentUserOrganizationUrl?: string;
    currentUserOrganizationUrls?: string[];
    currentUserPublicUrl?: string;
    currentUserUrl?: string;
    timelineUrl: string;
    userUrl: string;
}
