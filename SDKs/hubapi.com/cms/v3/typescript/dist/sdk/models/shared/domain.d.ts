import { SpeakeasyBase } from "../../../internal/utils";
/**
 * successful operation
 */
export declare class Domain extends SpeakeasyBase {
    correctCname?: string;
    created?: Date;
    /**
     * The actual domain or sub-domain. e.g. www.hubspot.com
     */
    domain: string;
    /**
     * The unique ID of this domain.
     */
    id: string;
    /**
     * Whether the DNS for this domain is optimally configured for use with HubSpot.
     */
    isResolving: boolean;
    isSslEnabled?: boolean;
    isSslOnly?: boolean;
    /**
     * Whether the domain is used for CMS blog posts.
     */
    isUsedForBlogPost: boolean;
    /**
     * Whether the domain is used for CMS email web pages.
     */
    isUsedForEmail: boolean;
    /**
     * Whether the domain is used for CMS knowledge pages.
     */
    isUsedForKnowledge: boolean;
    /**
     * Whether the domain is used for CMS landing pages.
     */
    isUsedForLandingPage: boolean;
    /**
     * Whether the domain is used for CMS site pages.
     */
    isUsedForSitePage: boolean;
    manuallyMarkedAsResolving?: boolean;
    primaryBlogPost?: boolean;
    primaryEmail?: boolean;
    primaryKnowledge?: boolean;
    primaryLandingPage?: boolean;
    primarySitePage?: boolean;
    secondaryToDomain?: string;
    updated?: Date;
}
