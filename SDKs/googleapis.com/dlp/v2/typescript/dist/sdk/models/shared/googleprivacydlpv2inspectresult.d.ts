import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Finding } from "./googleprivacydlpv2finding";
/**
 * All the findings for a single scanned item.
 */
export declare class GooglePrivacyDlpV2InspectResult extends SpeakeasyBase {
    /**
     * List of findings for an item.
     */
    findings?: GooglePrivacyDlpV2Finding[];
    /**
     * If true, then this item might have more findings than were returned, and the findings returned are an arbitrary subset of all findings. The findings list might be truncated because the input items were too large, or because the server reached the maximum amount of resources allowed for a single API call. For best results, divide the input into smaller batches.
     */
    findingsTruncated?: boolean;
}
