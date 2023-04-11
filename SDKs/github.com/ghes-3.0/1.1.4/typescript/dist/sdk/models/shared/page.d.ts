import { SpeakeasyBase } from "../../../internal/utils";
import { PagesHttpsCertificate } from "./pageshttpscertificate";
import { PagesSourceHash } from "./pagessourcehash";
/**
 * The state if the domain is verified
 */
export declare enum PageProtectedDomainStateEnum {
    Pending = "pending",
    Verified = "verified",
    Unverified = "unverified"
}
/**
 * The status of the most recent build of the Page.
 */
export declare enum PageStatusEnum {
    Built = "built",
    Building = "building",
    Errored = "errored"
}
/**
 * The configuration for GitHub Pages for a repository.
 */
export declare class Page extends SpeakeasyBase {
    /**
     * The Pages site's custom domain
     */
    cname: string;
    /**
     * Whether the Page has a custom 404 page.
     */
    custom404: boolean;
    /**
     * The web address the Page can be accessed from.
     */
    htmlUrl?: string;
    httpsCertificate?: PagesHttpsCertificate;
    /**
     * Whether https is enabled on the domain
     */
    httpsEnforced?: boolean;
    /**
     * The timestamp when a pending domain becomes unverified.
     */
    pendingDomainUnverifiedAt?: Date;
    /**
     * The state if the domain is verified
     */
    protectedDomainState?: PageProtectedDomainStateEnum;
    /**
     * Whether the GitHub Pages site is publicly visible. If set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site.
     */
    public: boolean;
    source?: PagesSourceHash;
    /**
     * The status of the most recent build of the Page.
     */
    status: PageStatusEnum;
    /**
     * The API address for accessing this Page resource.
     */
    url: string;
}
