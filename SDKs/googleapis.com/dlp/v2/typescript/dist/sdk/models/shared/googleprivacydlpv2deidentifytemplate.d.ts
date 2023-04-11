import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeidentifyConfig } from "./googleprivacydlpv2deidentifyconfig";
/**
 * DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
 */
export declare class GooglePrivacyDlpV2DeidentifyTemplate extends SpeakeasyBase {
    /**
     * Output only. The creation timestamp of an inspectTemplate.
     */
    createTime?: string;
    /**
     * The configuration that controls how the data will change.
     */
    deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;
    /**
     * Short description (max 256 chars).
     */
    description?: string;
    /**
     * Display name (max 256 chars).
     */
    displayName?: string;
    /**
     * Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/deidentifyTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/deidentifyTemplates/TEMPLATE_ID`
     */
    name?: string;
    /**
     * Output only. The last update timestamp of an inspectTemplate.
     */
    updateTime?: string;
}
/**
 * DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
 */
export declare class GooglePrivacyDlpV2DeidentifyTemplateInput extends SpeakeasyBase {
    /**
     * The configuration that controls how the data will change.
     */
    deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;
    /**
     * Short description (max 256 chars).
     */
    description?: string;
    /**
     * Display name (max 256 chars).
     */
    displayName?: string;
}
