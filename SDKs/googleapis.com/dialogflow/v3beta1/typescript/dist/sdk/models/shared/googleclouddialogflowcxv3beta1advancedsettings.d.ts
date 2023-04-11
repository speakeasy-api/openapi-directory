import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings } from "./googleclouddialogflowcxv3beta1advancedsettingsloggingsettings";
import { GoogleCloudDialogflowCxV3beta1GcsDestination } from "./googleclouddialogflowcxv3beta1gcsdestination";
/**
 * Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Overriding occurs at the sub-setting level. For example, the playback_interruption_settings at fulfillment level only overrides the playback_interruption_settings at the agent level, leaving other settings at the agent level unchanged. DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.
 */
export declare class GoogleCloudDialogflowCxV3beta1AdvancedSettings extends SpeakeasyBase {
    /**
     * Google Cloud Storage location for a Dialogflow operation that writes or exports objects (e.g. exported agent or transcripts) outside of Dialogflow.
     */
    audioExportGcsDestination?: GoogleCloudDialogflowCxV3beta1GcsDestination;
    /**
     * Define behaviors on logging.
     */
    loggingSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings;
}
