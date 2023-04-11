import { SpeakeasyBase } from "../../../internal/utils";
import { SapValidationValidationDetail } from "./sapvalidationvalidationdetail";
/**
 * A presentation of SAP workload insight. The schema of SAP workloads validation related data.
 */
export declare class SapValidation extends SpeakeasyBase {
    /**
     * A list of SAP validation metrics data.
     */
    validationDetails?: SapValidationValidationDetail[];
}
