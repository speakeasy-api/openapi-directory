import { SpeakeasyBase } from "../../../internal/utils";
import { Repository } from "./repository";
/**
 * Describe whether all repositories have been selected or there's a selection involved
 */
export declare enum AuthenticationTokenRepositorySelectionEnum {
    All = "all",
    Selected = "selected"
}
/**
 * Authentication Token
 */
export declare class AuthenticationToken extends SpeakeasyBase {
    /**
     * The time this token expires
     */
    expiresAt: Date;
    permissions?: Record<string, any>;
    /**
     * The repositories this token has access to
     */
    repositories?: Repository[];
    /**
     * Describe whether all repositories have been selected or there's a selection involved
     */
    repositorySelection?: AuthenticationTokenRepositorySelectionEnum;
    singleFile?: string;
    /**
     * The token used for authentication
     */
    token: string;
}
