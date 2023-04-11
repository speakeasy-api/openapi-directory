import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A domain that a user has been authorized to administer. To authorize use of a domain, verify ownership via [Webmaster Central](https://www.google.com/webmasters/verification/home).
 */
export declare class AuthorizedDomain extends SpeakeasyBase {
    /**
     * Relative name of the domain authorized for use. Example: `example.com`.
     */
    id?: string;
    /**
     * Deprecated Read only. Full path to the `AuthorizedDomain` resource in the API. Example: `projects/myproject/authorizedDomains/example.com`.
     */
    name?: string;
}
