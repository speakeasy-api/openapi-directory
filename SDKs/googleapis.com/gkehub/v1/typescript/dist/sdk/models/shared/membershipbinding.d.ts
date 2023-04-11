import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipBindingLifecycleState } from "./membershipbindinglifecyclestate";
/**
 * MembershipBinding is a subresource of a Membership, representing what Fleet Scopes (or other, future Fleet resources) a Membership is bound to.
 */
export declare class MembershipBindingInput extends SpeakeasyBase {
    /**
     * Whether the membershipbinding is Fleet-wide; true means that this Membership should be bound to all Namespaces in this entire Fleet.
     */
    fleet?: boolean;
    /**
     * The resource name for the membershipbinding itself `projects/{project}/locations/{location}/memberships/{membership}/bindings/{membershipbinding}`
     */
    name?: string;
    /**
     * A Workspace resource name in the format `projects/* /locations/* /scopes/*`.
     */
    scope?: string;
}
/**
 * MembershipBinding is a subresource of a Membership, representing what Fleet Scopes (or other, future Fleet resources) a Membership is bound to.
 */
export declare class MembershipBinding extends SpeakeasyBase {
    /**
     * Output only. When the membership binding was created.
     */
    createTime?: string;
    /**
     * Output only. When the membership binding was deleted.
     */
    deleteTime?: string;
    /**
     * Whether the membershipbinding is Fleet-wide; true means that this Membership should be bound to all Namespaces in this entire Fleet.
     */
    fleet?: boolean;
    /**
     * The resource name for the membershipbinding itself `projects/{project}/locations/{location}/memberships/{membership}/bindings/{membershipbinding}`
     */
    name?: string;
    /**
     * A Workspace resource name in the format `projects/* /locations/* /scopes/*`.
     */
    scope?: string;
    /**
     * MembershipBindingLifecycleState describes the state of a Binding resource.
     */
    state?: MembershipBindingLifecycleState;
    /**
     * Output only. Google-generated UUID for this resource. This is unique across all membershipbinding resources. If a membershipbinding resource is deleted and another resource with the same name is created, it gets a different uid.
     */
    uid?: string;
    /**
     * Output only. When the membership binding was last updated.
     */
    updateTime?: string;
}
