import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OwnerReference contains enough information to let you identify an owning object. Currently, an owning object must be in the same namespace, so there is no namespace field.
 */
export declare class OwnerReference extends SpeakeasyBase {
    /**
     * API version of the referent.
     */
    apiVersion?: string;
    /**
     * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. +optional
     */
    blockOwnerDeletion?: boolean;
    /**
     * If true, this reference points to the managing controller. +optional
     */
    controller?: boolean;
    /**
     * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string;
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/user-guide/identifiers#names
     */
    name?: string;
    /**
     * UID of the referent. More info: https://kubernetes.io/docs/user-guide/identifiers#uids
     */
    uid?: string;
}
