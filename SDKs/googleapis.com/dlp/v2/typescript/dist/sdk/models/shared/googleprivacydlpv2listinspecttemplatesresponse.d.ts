import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectTemplate } from "./googleprivacydlpv2inspecttemplate";
/**
 * Response message for ListInspectTemplates.
 */
export declare class GooglePrivacyDlpV2ListInspectTemplatesResponse extends SpeakeasyBase {
    /**
     * List of inspectTemplates, up to page_size in ListInspectTemplatesRequest.
     */
    inspectTemplates?: GooglePrivacyDlpV2InspectTemplate[];
    /**
     * If the next page is available then the next page token to be used in following ListInspectTemplates request.
     */
    nextPageToken?: string;
}
