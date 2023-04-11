import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectResult } from "./googleprivacydlpv2inspectresult";
/**
 * Results of inspecting an item.
 */
export declare class GooglePrivacyDlpV2InspectContentResponse extends SpeakeasyBase {
    /**
     * All the findings for a single scanned item.
     */
    result?: GooglePrivacyDlpV2InspectResult;
}
