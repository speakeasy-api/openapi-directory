import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ResourceRequirements describes the compute resource requirements.
 */
export declare class GoogleCloudRunV2ResourceRequirements extends SpeakeasyBase {
    /**
     * Determines whether CPU should be throttled or not outside of requests.
     */
    cpuIdle?: boolean;
    /**
     * Only memory and CPU are supported. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
     */
    limits?: Record<string, string>;
}
