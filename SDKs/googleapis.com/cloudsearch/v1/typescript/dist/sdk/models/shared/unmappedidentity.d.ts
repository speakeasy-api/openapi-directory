import { SpeakeasyBase } from "../../../internal/utils";
import { Principal } from "./principal";
/**
 * The resolution status for the external identity.
 */
export declare enum UnmappedIdentityResolutionStatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    NotFound = "NOT_FOUND",
    IdentitySourceNotFound = "IDENTITY_SOURCE_NOT_FOUND",
    IdentitySourceMisconfigured = "IDENTITY_SOURCE_MISCONFIGURED",
    TooManyMappingsFound = "TOO_MANY_MAPPINGS_FOUND",
    InternalError = "INTERNAL_ERROR"
}
export declare class UnmappedIdentity extends SpeakeasyBase {
    /**
     * Reference to a user, group, or domain.
     */
    externalIdentity?: Principal;
    /**
     * The resolution status for the external identity.
     */
    resolutionStatusCode?: UnmappedIdentityResolutionStatusCodeEnum;
}
