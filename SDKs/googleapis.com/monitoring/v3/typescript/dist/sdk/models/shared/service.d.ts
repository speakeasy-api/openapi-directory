import { SpeakeasyBase } from "../../../internal/utils";
import { AppEngine } from "./appengine";
import { BasicService } from "./basicservice";
import { CloudEndpoints } from "./cloudendpoints";
import { CloudRun } from "./cloudrun";
import { ClusterIstio } from "./clusteristio";
import { GkeNamespace, GkeNamespaceInput } from "./gkenamespace";
import { GkeService, GkeServiceInput } from "./gkeservice";
import { GkeWorkload, GkeWorkloadInput } from "./gkeworkload";
import { IstioCanonicalService } from "./istiocanonicalservice";
import { MeshIstio } from "./meshistio";
import { Telemetry } from "./telemetry";
/**
 * A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
 */
export declare class Service extends SpeakeasyBase {
    /**
     * App Engine service. Learn more at https://cloud.google.com/appengine.
     */
    appEngine?: AppEngine;
    /**
     * A well-known service type, defined by its service type and service labels. Documentation and examples here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli).
     */
    basicService?: BasicService;
    /**
     * Cloud Endpoints service. Learn more at https://cloud.google.com/endpoints.
     */
    cloudEndpoints?: CloudEndpoints;
    /**
     * Cloud Run service. Learn more at https://cloud.google.com/run.
     */
    cloudRun?: CloudRun;
    /**
     * Istio service scoped to a single Kubernetes cluster. Learn more at https://istio.io. Clusters running OSS Istio will have their services ingested as this type.
     */
    clusterIstio?: ClusterIstio;
    /**
     * Use a custom service to designate a service that you want to monitor when none of the other service types (like App Engine, Cloud Run, or a GKE type) matches your intended service.
     */
    custom?: Record<string, any>;
    /**
     * Name used for UI elements listing this Service.
     */
    displayName?: string;
    /**
     * GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod).
     */
    gkeNamespace?: GkeNamespace;
    /**
     * GKE Service. The "service" here represents a Kubernetes service object (https://kubernetes.io/docs/concepts/services-networking/service). The field names correspond to the resource labels on k8s_service monitored resources (https://cloud.google.com/monitoring/api/resources#tag_k8s_service).
     */
    gkeService?: GkeService;
    /**
     * A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod).
     */
    gkeWorkload?: GkeWorkload;
    /**
     * Canonical service scoped to an Istio mesh. Anthos clusters running ASM >= 1.6.8 will have their services ingested as this type.
     */
    istioCanonicalService?: IstioCanonicalService;
    /**
     * Istio service scoped to an Istio mesh. Anthos clusters running ASM < 1.6.8 will have their services ingested as this type.
     */
    meshIstio?: MeshIstio;
    /**
     * Resource name for this Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]
     */
    name?: string;
    /**
     * Configuration for how to query telemetry on a Service.
     */
    telemetry?: Telemetry;
    /**
     * Labels which have been used to annotate the service. Label keys must start with a letter. Label keys and values may contain lowercase letters, numbers, underscores, and dashes. Label keys and values have a maximum length of 63 characters, and must be less than 128 bytes in size. Up to 64 label entries may be stored. For labels which do not have a semantic value, the empty string may be supplied for the label value.
     */
    userLabels?: Record<string, string>;
}
/**
 * A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
 */
export declare class ServiceInput extends SpeakeasyBase {
    /**
     * App Engine service. Learn more at https://cloud.google.com/appengine.
     */
    appEngine?: AppEngine;
    /**
     * A well-known service type, defined by its service type and service labels. Documentation and examples here (https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/api/api-structures#basic-svc-w-basic-sli).
     */
    basicService?: BasicService;
    /**
     * Cloud Endpoints service. Learn more at https://cloud.google.com/endpoints.
     */
    cloudEndpoints?: CloudEndpoints;
    /**
     * Cloud Run service. Learn more at https://cloud.google.com/run.
     */
    cloudRun?: CloudRun;
    /**
     * Istio service scoped to a single Kubernetes cluster. Learn more at https://istio.io. Clusters running OSS Istio will have their services ingested as this type.
     */
    clusterIstio?: ClusterIstio;
    /**
     * Use a custom service to designate a service that you want to monitor when none of the other service types (like App Engine, Cloud Run, or a GKE type) matches your intended service.
     */
    custom?: Record<string, any>;
    /**
     * Name used for UI elements listing this Service.
     */
    displayName?: string;
    /**
     * GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod).
     */
    gkeNamespace?: GkeNamespaceInput;
    /**
     * GKE Service. The "service" here represents a Kubernetes service object (https://kubernetes.io/docs/concepts/services-networking/service). The field names correspond to the resource labels on k8s_service monitored resources (https://cloud.google.com/monitoring/api/resources#tag_k8s_service).
     */
    gkeService?: GkeServiceInput;
    /**
     * A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod).
     */
    gkeWorkload?: GkeWorkloadInput;
    /**
     * Canonical service scoped to an Istio mesh. Anthos clusters running ASM >= 1.6.8 will have their services ingested as this type.
     */
    istioCanonicalService?: IstioCanonicalService;
    /**
     * Istio service scoped to an Istio mesh. Anthos clusters running ASM < 1.6.8 will have their services ingested as this type.
     */
    meshIstio?: MeshIstio;
    /**
     * Resource name for this Service. The format is: projects/[PROJECT_ID_OR_NUMBER]/services/[SERVICE_ID]
     */
    name?: string;
    /**
     * Configuration for how to query telemetry on a Service.
     */
    telemetry?: Telemetry;
    /**
     * Labels which have been used to annotate the service. Label keys must start with a letter. Label keys and values may contain lowercase letters, numbers, underscores, and dashes. Label keys and values have a maximum length of 63 characters, and must be less than 128 bytes in size. Up to 64 label entries may be stored. For labels which do not have a semantic value, the empty string may be supplied for the label value.
     */
    userLabels?: Record<string, string>;
}
