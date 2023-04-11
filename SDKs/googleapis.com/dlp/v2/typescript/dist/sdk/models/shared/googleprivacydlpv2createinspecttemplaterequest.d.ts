import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectTemplateInput } from "./googleprivacydlpv2inspecttemplate";
/**
 * Request message for CreateInspectTemplate.
 */
export declare class GooglePrivacyDlpV2CreateInspectTemplateRequestInput extends SpeakeasyBase {
    /**
     * The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
     */
    inspectTemplate?: GooglePrivacyDlpV2InspectTemplateInput;
    /**
     * Deprecated. This field has no effect.
     */
    locationId?: string;
    /**
     * The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: `[a-zA-Z\d-_]+`. The maximum length is 100 characters. Can be empty to allow the system to generate one.
     */
    templateId?: string;
}
