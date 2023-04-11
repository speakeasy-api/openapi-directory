import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { ServiceSpec, ServiceSpecInput } from "./servicespec";
import { ServiceStatus, ServiceStatusInput } from "./servicestatus";
/**
 * Service acts as a top-level container that manages a set of Routes and Configurations which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. Service acts only as an orchestrator of the underlying Routes and Configurations (much as a kubernetes Deployment orchestrates ReplicaSets). The Service's controller will track the statuses of its owned Configuration and Route, reflecting their statuses and conditions as its own. See also: https://github.com/knative/serving/blob/main/docs/spec/overview.md#service
 */
export declare class ServiceInput extends SpeakeasyBase {
    /**
     * The API version for this call. It must be "serving.knative.dev/v1".
     */
    apiVersion?: string;
    /**
     * The kind of resource. It must be "Service".
     */
    kind?: string;
    /**
     * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
     */
    metadata?: ObjectMeta;
    /**
     * ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
     */
    spec?: ServiceSpecInput;
    /**
     * The current state of the Service. Output only.
     */
    status?: ServiceStatusInput;
}
/**
 * Service acts as a top-level container that manages a set of Routes and Configurations which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. Service acts only as an orchestrator of the underlying Routes and Configurations (much as a kubernetes Deployment orchestrates ReplicaSets). The Service's controller will track the statuses of its owned Configuration and Route, reflecting their statuses and conditions as its own. See also: https://github.com/knative/serving/blob/main/docs/spec/overview.md#service
 */
export declare class Service extends SpeakeasyBase {
    /**
     * The API version for this call. It must be "serving.knative.dev/v1".
     */
    apiVersion?: string;
    /**
     * The kind of resource. It must be "Service".
     */
    kind?: string;
    /**
     * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
     */
    metadata?: ObjectMeta;
    /**
     * ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
     */
    spec?: ServiceSpec;
    /**
     * The current state of the Service. Output only.
     */
    status?: ServiceStatus;
}
