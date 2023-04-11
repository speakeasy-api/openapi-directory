import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ServiceBinding is the resource that defines a Service Directory Service to be used in a BackendService resource.
 */
export declare class ServiceBinding extends SpeakeasyBase {
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string;
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string;
    /**
     * Optional. Set of label tags associated with the ServiceBinding resource.
     */
    labels?: Record<string, string>;
    /**
     * Required. Name of the ServiceBinding resource. It matches pattern `projects/* /locations/global/serviceBindings/service_binding_name`.
     */
    name?: string;
    /**
     * Required. The full Service Directory Service name of the format projects/* /locations/* /namespaces/* /services/*
     */
    service?: string;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string;
}
/**
 * ServiceBinding is the resource that defines a Service Directory Service to be used in a BackendService resource.
 */
export declare class ServiceBindingInput extends SpeakeasyBase {
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     */
    description?: string;
    /**
     * Optional. Set of label tags associated with the ServiceBinding resource.
     */
    labels?: Record<string, string>;
    /**
     * Required. Name of the ServiceBinding resource. It matches pattern `projects/* /locations/global/serviceBindings/service_binding_name`.
     */
    name?: string;
    /**
     * Required. The full Service Directory Service name of the format projects/* /locations/* /namespaces/* /services/*
     */
    service?: string;
}
