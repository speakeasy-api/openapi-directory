import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";
import { GooglePrivacyDlpV2HybridFindingDetails } from "./googleprivacydlpv2hybridfindingdetails";
/**
 * An individual hybrid item to inspect. Will be stored temporarily during processing.
 */
export declare class GooglePrivacyDlpV2HybridContentItem extends SpeakeasyBase {
    /**
     * Populate to associate additional data with each finding.
     */
    findingDetails?: GooglePrivacyDlpV2HybridFindingDetails;
    item?: GooglePrivacyDlpV2ContentItem;
}
