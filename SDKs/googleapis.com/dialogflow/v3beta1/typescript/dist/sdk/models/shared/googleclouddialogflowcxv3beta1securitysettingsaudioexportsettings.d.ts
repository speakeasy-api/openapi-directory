import { SpeakeasyBase } from "../../../internal/utils";
/**
 * File format for exported audio file. Currently only in telephony recordings.
 */
export declare enum GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum {
    AudioFormatUnspecified = "AUDIO_FORMAT_UNSPECIFIED",
    Mulaw = "MULAW",
    Mp3 = "MP3",
    Ogg = "OGG"
}
/**
 * Settings for exporting audio.
 */
export declare class GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings extends SpeakeasyBase {
    /**
     * Filename pattern for exported audio.
     */
    audioExportPattern?: string;
    /**
     * File format for exported audio file. Currently only in telephony recordings.
     */
    audioFormat?: GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettingsAudioFormatEnum;
    /**
     * Enable audio redaction if it is true.
     */
    enableAudioRedaction?: boolean;
    /**
     * Cloud Storage bucket to export audio record to. Setting this field would grant the Storage Object Creator role to the Dialogflow Service Agent. API caller that tries to modify this field should have the permission of storage.buckets.setIamPolicy.
     */
    gcsBucket?: string;
}
