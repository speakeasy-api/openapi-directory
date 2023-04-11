import { SpeakeasyBase } from "../../../internal/utils";
import { DeprecationStatus } from "./deprecationstatus";
/**
 * Represents an Accelerator Type resource. Google Cloud Platform provides graphics processing units (accelerators) that you can add to VM instances to improve or accelerate performance when working with intensive workloads. For more information, read GPUs on Compute Engine.
 */
export declare class AcceleratorType extends SpeakeasyBase {
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * Deprecation status for a public resource.
     */
    deprecated?: DeprecationStatus;
    /**
     * [Output Only] An optional textual description of the resource.
     */
    description?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] The type of the resource. Always compute#acceleratorType for accelerator types.
     */
    kind?: string;
    /**
     * [Output Only] Maximum number of accelerator cards allowed per instance.
     */
    maximumCardsPerInstance?: number;
    /**
     * [Output Only] Name of the resource.
     */
    name?: string;
    /**
     * [Output Only] Server-defined, fully qualified URL for this resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource's resource id.
     */
    selfLinkWithId?: string;
    /**
     * [Output Only] The name of the zone where the accelerator type resides, such as us-central1-a. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
     */
    zone?: string;
}
