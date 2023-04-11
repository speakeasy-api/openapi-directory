import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result of the revision check.
 */
export declare enum RevisionCheckResponseRevisionStatusEnum {
    RevisionStatusUnspecified = "REVISION_STATUS_UNSPECIFIED",
    Ok = "OK",
    Deprecated = "DEPRECATED",
    Invalid = "INVALID"
}
/**
 * A third party checking a revision response.
 */
export declare class RevisionCheckResponse extends SpeakeasyBase {
    /**
     * The version of the API this client revision should use when calling API methods.
     */
    apiVersion?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#revisionCheckResponse`.
     */
    kind?: string;
    /**
     * The result of the revision check.
     */
    revisionStatus?: RevisionCheckResponseRevisionStatusEnum;
}
