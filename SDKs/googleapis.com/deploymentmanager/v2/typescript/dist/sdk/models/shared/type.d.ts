import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * A resource type supported by Deployment Manager.
 */
export declare class TypeT extends SpeakeasyBase {
    id?: string;
    /**
     * Output only. Creation timestamp in RFC3339 text format.
     */
    insertTime?: string;
    /**
     * Name of the type.
     */
    name?: string;
    /**
     * Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zonalOperations` resource. For more information, read Global, Regional, and Zonal Resources.
     */
    operation?: Operation;
    /**
     * Output only. Server defined URL for the resource.
     */
    selfLink?: string;
}
