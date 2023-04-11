import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
/**
 * The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
 */
export declare class GooglePrivacyDlpV2InspectTemplate extends SpeakeasyBase {
    /**
     * Output only. The creation timestamp of an inspectTemplate.
     */
    createTime?: string;
    /**
     * Short description (max 256 chars).
     */
    description?: string;
    /**
     * Display name (max 256 chars).
     */
    displayName?: string;
    /**
     * Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used.
     */
    inspectConfig?: GooglePrivacyDlpV2InspectConfig;
    /**
     * Output only. The template name. The template will have one of the following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`;
     */
    name?: string;
    /**
     * Output only. The last update timestamp of an inspectTemplate.
     */
    updateTime?: string;
}
/**
 * The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
 */
export declare class GooglePrivacyDlpV2InspectTemplateInput extends SpeakeasyBase {
    /**
     * Short description (max 256 chars).
     */
    description?: string;
    /**
     * Display name (max 256 chars).
     */
    displayName?: string;
    /**
     * Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used.
     */
    inspectConfig?: GooglePrivacyDlpV2InspectConfig;
}
