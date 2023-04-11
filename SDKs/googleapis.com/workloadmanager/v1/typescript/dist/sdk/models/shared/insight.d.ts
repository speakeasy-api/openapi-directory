import { SpeakeasyBase } from "../../../internal/utils";
import { SapDiscovery } from "./sapdiscovery";
import { SapValidation } from "./sapvalidation";
/**
 * A presentation of host resource usage where the workload runs.
 */
export declare class InsightInput extends SpeakeasyBase {
    /**
     * The schema of SAP system discovery data.
     */
    sapDiscovery?: SapDiscovery;
    /**
     * A presentation of SAP workload insight. The schema of SAP workloads validation related data.
     */
    sapValidation?: SapValidation;
}
