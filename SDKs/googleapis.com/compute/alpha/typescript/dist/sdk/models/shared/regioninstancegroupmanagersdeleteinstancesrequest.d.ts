import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegionInstanceGroupManagersDeleteInstancesRequest extends SpeakeasyBase {
    /**
     * The URLs of one or more instances to delete. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
     */
    instances?: string[];
    /**
     * Skip instances which cannot be deleted (instances not belonging to this managed group, already being deleted or being abandoned). If `false`, fail whole flow, if such instance is passed. DEPRECATED: Use skip_instances_on_validation_error instead.
     */
    skipInapplicableInstances?: boolean;
    /**
     * Specifies whether the request should proceed despite the inclusion of instances that are not members of the group or that are already in the process of being deleted or abandoned. If this field is set to `false` and such an instance is specified in the request, the operation fails. The operation always fails if the request contains a malformed instance URL or a reference to an instance that exists in a zone or region other than the group's zone or region.
     */
    skipInstancesOnValidationError?: boolean;
}
