import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
/**
 * l-diversity metric, used for analysis of reidentification risk.
 */
export declare class GooglePrivacyDlpV2LDiversityConfig extends SpeakeasyBase {
    /**
     * Set of quasi-identifiers indicating how equivalence classes are defined for the l-diversity computation. When multiple fields are specified, they are considered a single composite key.
     */
    quasiIds?: GooglePrivacyDlpV2FieldId[];
    /**
     * General identifier of a data field in a storage service.
     */
    sensitiveAttribute?: GooglePrivacyDlpV2FieldId;
}
