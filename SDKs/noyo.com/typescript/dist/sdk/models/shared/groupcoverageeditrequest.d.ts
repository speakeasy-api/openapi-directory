import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupCoverageEditRequest extends SpeakeasyBase {
    /**
     * True if this line of coverage is currently active with the carrier
     */
    existingCoverage?: boolean;
    /**
     * General platform notes about the group coverage
     */
    notes?: string;
    /**
     * Requested effective date for start of coverage
     */
    requestedEffectiveDate?: Date;
}
