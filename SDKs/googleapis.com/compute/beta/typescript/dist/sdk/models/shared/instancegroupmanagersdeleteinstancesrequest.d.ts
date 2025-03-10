import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstanceGroupManagersDeleteInstancesRequest extends SpeakeasyBase {
    /**
     * The URLs of one or more instances to delete. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME]. Queued instances do not have URL and can be deleted only by name. One cannot specify both URLs and names in a single request.
     */
    instances?: string[];
    /**
     * Specifies whether the request should proceed despite the inclusion of instances that are not members of the group or that are already in the process of being deleted or abandoned. If this field is set to `false` and such an instance is specified in the request, the operation fails. The operation always fails if the request contains a malformed instance URL or a reference to an instance that exists in a zone or region other than the group's zone or region.
     */
    skipInstancesOnValidationError?: boolean;
}
