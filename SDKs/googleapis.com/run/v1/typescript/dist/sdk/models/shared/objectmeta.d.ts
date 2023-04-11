import { SpeakeasyBase } from "../../../internal/utils";
import { OwnerReference } from "./ownerreference";
/**
 * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
 */
export declare class ObjectMeta extends SpeakeasyBase {
    /**
     * Unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. In Cloud Run, annotations with 'run.googleapis.com/' and 'autoscaling.knative.dev' are restricted, and the accepted annotations will be different depending on the resource type. * `autoscaling.knative.dev/maxScale`: Revision. * `autoscaling.knative.dev/minScale`: Revision. * `run.googleapis.com/binary-authorization-breakglass`: Service, Job, * `run.googleapis.com/binary-authorization`: Service, Job, Execution. * `run.googleapis.com/client-name`: All resources. * `run.googleapis.com/cloudsql-instances`: Revision, Execution. * `run.googleapis.com/cpu-throttling`: Revision. * `run.googleapis.com/custom-audiences`: Service. * `run.googleapis.com/description`: Service. * `run.googleapis.com/encryption-key-shutdown-hours`: Revision * `run.googleapis.com/encryption-key`: Revision, Execution. * `run.googleapis.com/execution-environment`: Revision, Execution. * `run.googleapis.com/gc-traffic-tags`: Service. * `run.googleapis.com/ingress`: Service. * `run.googleapis.com/network-interfaces`: Revision, Execution. * `run.googleapis.com/post-key-revocation-action-type`: Revision. * `run.googleapis.com/secrets`: Revision, Execution. * `run.googleapis.com/secure-session-agent`: Revision. * `run.googleapis.com/sessionAffinity`: Revision. * `run.googleapis.com/startup-cpu-boost`: Revision. * `run.googleapis.com/vpc-access-connector`: Revision, Execution. * `run.googleapis.com/vpc-access-egress`: Revision, Execution. Execution. More info: https://kubernetes.io/docs/user-guide/annotations
     */
    annotations?: Record<string, string>;
    /**
     * Not supported by Cloud Run
     */
    clusterName?: string;
    /**
     * UTC timestamp representing the server time when this object was created. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     */
    creationTimestamp?: string;
    /**
     * Not supported by Cloud Run
     */
    deletionGracePeriodSeconds?: number;
    /**
     * The read-only soft deletion timestamp for this resource. In Cloud Run, users are not able to set this field. Instead, they must call the corresponding Delete API.
     */
    deletionTimestamp?: string;
    /**
     * Not supported by Cloud Run
     */
    finalizers?: string[];
    /**
     * Not supported by Cloud Run
     */
    generateName?: string;
    /**
     * A system-provided sequence number representing a specific generation of the desired state.
     */
    generation?: number;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and routes. More info: https://kubernetes.io/docs/user-guide/labels
     */
    labels?: Record<string, string>;
    /**
     * Required. The name of the resource. In Cloud Run, name is required when creating top-level resources (Service, Job), must be unique within a Cloud Run project/region, and cannot be changed once created. More info: https://kubernetes.io/docs/user-guide/identifiers#names
     */
    name?: string;
    /**
     * Required. Defines the space within each name must be unique within a Cloud Run region. In Cloud Run, it must be project ID or number.
     */
    namespace?: string;
    /**
     * Not supported by Cloud Run
     */
    ownerReferences?: OwnerReference[];
    /**
     * Opaque, system-generated value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server or omit the value to disable conflict-detection. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string;
    /**
     * URL representing this object.
     */
    selfLink?: string;
    /**
     * Unique, system-generated identifier for this resource. More info: https://kubernetes.io/docs/user-guide/identifiers#uids
     */
    uid?: string;
}
