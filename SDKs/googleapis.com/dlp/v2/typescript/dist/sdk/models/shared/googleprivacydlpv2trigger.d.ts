import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Schedule } from "./googleprivacydlpv2schedule";
/**
 * What event needs to occur for a new job to be started.
 */
export declare class GooglePrivacyDlpV2Trigger extends SpeakeasyBase {
    /**
     * Job trigger option for hybrid jobs. Jobs must be manually created and finished.
     */
    manual?: Record<string, any>;
    /**
     * Schedule for inspect job triggers.
     */
    schedule?: GooglePrivacyDlpV2Schedule;
}
