import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeidentifyTemplateInput } from "./googleprivacydlpv2deidentifytemplate";
/**
 * Request message for CreateDeidentifyTemplate.
 */
export declare class GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput extends SpeakeasyBase {
    /**
     * DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
     */
    deidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplateInput;
    /**
     * Deprecated. This field has no effect.
     */
    locationId?: string;
    /**
     * The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
     */
    templateId?: string;
}
