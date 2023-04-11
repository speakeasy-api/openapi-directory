import { SpeakeasyBase } from "../../../internal/utils";
import { RevisionTemplate } from "./revisiontemplate";
import { TrafficTarget, TrafficTargetInput } from "./traffictarget";
/**
 * ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
 */
export declare class ServiceSpecInput extends SpeakeasyBase {
    /**
     * RevisionTemplateSpec describes the data a revision should have when created from a template. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
     */
    template?: RevisionTemplate;
    /**
     * Specifies how to distribute traffic over a collection of Knative Revisions and Configurations to the Service's main URL.
     */
    traffic?: TrafficTargetInput[];
}
/**
 * ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
 */
export declare class ServiceSpec extends SpeakeasyBase {
    /**
     * RevisionTemplateSpec describes the data a revision should have when created from a template. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
     */
    template?: RevisionTemplate;
    /**
     * Specifies how to distribute traffic over a collection of Knative Revisions and Configurations to the Service's main URL.
     */
    traffic?: TrafficTarget[];
}
