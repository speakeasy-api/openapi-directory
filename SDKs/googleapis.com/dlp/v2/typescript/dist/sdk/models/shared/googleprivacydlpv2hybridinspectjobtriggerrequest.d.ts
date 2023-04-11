import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2HybridContentItem } from "./googleprivacydlpv2hybridcontentitem";
/**
 * Request to search for potentially sensitive info in a custom location.
 */
export declare class GooglePrivacyDlpV2HybridInspectJobTriggerRequest extends SpeakeasyBase {
    /**
     * An individual hybrid item to inspect. Will be stored temporarily during processing.
     */
    hybridItem?: GooglePrivacyDlpV2HybridContentItem;
}
