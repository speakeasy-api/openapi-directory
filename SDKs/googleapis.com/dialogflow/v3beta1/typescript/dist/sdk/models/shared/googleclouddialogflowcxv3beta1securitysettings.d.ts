import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings } from "./googleclouddialogflowcxv3beta1securitysettingsaudioexportsettings";
import { GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings } from "./googleclouddialogflowcxv3beta1securitysettingsinsightsexportsettings";
export declare enum GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum {
    PurgeDataTypeUnspecified = "PURGE_DATA_TYPE_UNSPECIFIED",
    DialogflowHistory = "DIALOGFLOW_HISTORY"
}
/**
 * Defines the data for which Dialogflow applies redaction. Dialogflow does not redact data that it does not have access to – for example, Cloud logging.
 */
export declare enum GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScopeEnum {
    RedactionScopeUnspecified = "REDACTION_SCOPE_UNSPECIFIED",
    RedactDiskStorage = "REDACT_DISK_STORAGE"
}
/**
 * Strategy that defines how we do redaction.
 */
export declare enum GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategyEnum {
    RedactionStrategyUnspecified = "REDACTION_STRATEGY_UNSPECIFIED",
    RedactWithService = "REDACT_WITH_SERVICE"
}
/**
 * Represents the settings related to security issues, such as data redaction and data retention. It may take hours for updates on the settings to propagate to all the related components and take effect.
 */
export declare class GoogleCloudDialogflowCxV3beta1SecuritySettings extends SpeakeasyBase {
    /**
     * Settings for exporting audio.
     */
    audioExportSettings?: GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings;
    /**
     * [DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. The `DLP De-identify Templates Reader` role is needed on the Dialogflow service identity service account (has the form `service-PROJECT_NUMBER@gcp-sa-dialogflow.iam.gserviceaccount.com`) for your agent's project. If empty, Dialogflow replaces sensitive info with `[redacted]` text. The template name will have one of the following formats: `projects//locations//deidentifyTemplates/` OR `organizations//locations//deidentifyTemplates/` Note: `deidentify_template` must be located in the same region as the `SecuritySettings`.
     */
    deidentifyTemplate?: string;
    /**
     * Required. The human-readable name of the security settings, unique within the location.
     */
    displayName?: string;
    /**
     * Settings for exporting conversations to [Insights](https://cloud.google.com/contact-center/insights/docs).
     */
    insightsExportSettings?: GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings;
    /**
     * [DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. The `DLP Inspect Templates Reader` role is needed on the Dialogflow service identity service account (has the form `service-PROJECT_NUMBER@gcp-sa-dialogflow.iam.gserviceaccount.com`) for your agent's project. If empty, we use the default DLP inspect config. The template name will have one of the following formats: `projects//locations//inspectTemplates/` OR `organizations//locations//inspectTemplates/` Note: `inspect_template` must be located in the same region as the `SecuritySettings`.
     */
    inspectTemplate?: string;
    /**
     * Resource name of the settings. Required for the SecuritySettingsService.UpdateSecuritySettings method. SecuritySettingsService.CreateSecuritySettings populates the name automatically. Format: `projects//locations//securitySettings/`.
     */
    name?: string;
    /**
     * List of types of data to remove when retention settings triggers purge.
     */
    purgeDataTypes?: GoogleCloudDialogflowCxV3beta1SecuritySettingsPurgeDataTypesEnum[];
    /**
     * Defines the data for which Dialogflow applies redaction. Dialogflow does not redact data that it does not have access to – for example, Cloud logging.
     */
    redactionScope?: GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionScopeEnum;
    /**
     * Strategy that defines how we do redaction.
     */
    redactionStrategy?: GoogleCloudDialogflowCxV3beta1SecuritySettingsRedactionStrategyEnum;
    /**
     * Retains data in interaction logging for the specified number of days. This does not apply to Cloud logging, which is owned by the user - not Dialogflow. User must set a value lower than Dialogflow's default 365d TTL (30 days for Agent Assist traffic), higher value will be ignored and use default. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use default TTL.
     */
    retentionWindowDays?: number;
}
