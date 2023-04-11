import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeidentifyTemplate } from "./googleprivacydlpv2deidentifytemplate";
/**
 * Response message for ListDeidentifyTemplates.
 */
export declare class GooglePrivacyDlpV2ListDeidentifyTemplatesResponse extends SpeakeasyBase {
    /**
     * List of deidentify templates, up to page_size in ListDeidentifyTemplatesRequest.
     */
    deidentifyTemplates?: GooglePrivacyDlpV2DeidentifyTemplate[];
    /**
     * If the next page is available then the next page token to be used in following ListDeidentifyTemplates request.
     */
    nextPageToken?: string;
}
