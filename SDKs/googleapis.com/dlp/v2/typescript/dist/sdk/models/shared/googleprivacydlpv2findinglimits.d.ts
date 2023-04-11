import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoTypeLimit } from "./googleprivacydlpv2infotypelimit";
/**
 * Configuration to control the number of findings returned for inspection. This is not used for de-identification or data profiling. When redacting sensitive data from images, finding limits don't apply. They can cause unexpected or inconsistent results, where only some data is redacted. Don't include finding limits in RedactImage requests. Otherwise, Cloud DLP returns an error.
 */
export declare class GooglePrivacyDlpV2FindingLimits extends SpeakeasyBase {
    /**
     * Configuration of findings limit given for specified infoTypes.
     */
    maxFindingsPerInfoType?: GooglePrivacyDlpV2InfoTypeLimit[];
    /**
     * Max number of findings that will be returned for each item scanned. When set within `InspectJobConfig`, the maximum returned is 2000 regardless if this is set higher. When set within `InspectContentRequest`, this field is ignored.
     */
    maxFindingsPerItem?: number;
    /**
     * Max number of findings that will be returned per request/job. When set within `InspectContentRequest`, the maximum returned is 2000 regardless if this is set higher.
     */
    maxFindingsPerRequest?: number;
}
