import { SpeakeasyBase } from "../../../internal/utils";
import { CompensationEntry } from "./compensationentry";
import { CompensationRange } from "./compensationrange";
/**
 * Job compensation details.
 */
export declare class CompensationInfo extends SpeakeasyBase {
    /**
     * Compensation range.
     */
    annualizedBaseCompensationRange?: CompensationRange;
    /**
     * Compensation range.
     */
    annualizedTotalCompensationRange?: CompensationRange;
    /**
     * Optional. Job compensation information. At most one entry can be of type CompensationInfo.CompensationType.BASE, which is referred as ** base compensation entry ** for the job.
     */
    entries?: CompensationEntry[];
}
