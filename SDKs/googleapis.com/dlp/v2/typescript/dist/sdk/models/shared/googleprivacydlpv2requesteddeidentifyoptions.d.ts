import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeidentifyTemplate } from "./googleprivacydlpv2deidentifytemplate";
/**
 * De-id options.
 */
export declare class GooglePrivacyDlpV2RequestedDeidentifyOptions extends SpeakeasyBase {
    /**
     * DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
     */
    snapshotDeidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplate;
    /**
     * DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
     */
    snapshotImageRedactTemplate?: GooglePrivacyDlpV2DeidentifyTemplate;
    /**
     * DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
     */
    snapshotStructuredDeidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplate;
}
