import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Authentication type for subject.
 */
export declare enum SubjectKindEnum {
    AuthTypeUnspecified = "AUTH_TYPE_UNSPECIFIED",
    User = "USER",
    Serviceaccount = "SERVICEACCOUNT",
    Group = "GROUP"
}
/**
 * Represents a Kubernetes Subject.
 */
export declare class Subject extends SpeakeasyBase {
    /**
     * Authentication type for subject.
     */
    kind?: SubjectKindEnum;
    /**
     * Name for subject.
     */
    name?: string;
    /**
     * Namespace for subject.
     */
    ns?: string;
}
