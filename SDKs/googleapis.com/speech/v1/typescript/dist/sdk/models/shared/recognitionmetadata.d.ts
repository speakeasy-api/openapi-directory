import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The use case most closely describing the audio content to be recognized.
 */
export declare enum RecognitionMetadataInteractionTypeEnum {
    InteractionTypeUnspecified = "INTERACTION_TYPE_UNSPECIFIED",
    Discussion = "DISCUSSION",
    Presentation = "PRESENTATION",
    PhoneCall = "PHONE_CALL",
    Voicemail = "VOICEMAIL",
    ProfessionallyProduced = "PROFESSIONALLY_PRODUCED",
    VoiceSearch = "VOICE_SEARCH",
    VoiceCommand = "VOICE_COMMAND",
    Dictation = "DICTATION"
}
/**
 * The audio type that most closely describes the audio being recognized.
 */
export declare enum RecognitionMetadataMicrophoneDistanceEnum {
    MicrophoneDistanceUnspecified = "MICROPHONE_DISTANCE_UNSPECIFIED",
    Nearfield = "NEARFIELD",
    Midfield = "MIDFIELD",
    Farfield = "FARFIELD"
}
/**
 * The original media the speech was recorded on.
 */
export declare enum RecognitionMetadataOriginalMediaTypeEnum {
    OriginalMediaTypeUnspecified = "ORIGINAL_MEDIA_TYPE_UNSPECIFIED",
    Audio = "AUDIO",
    Video = "VIDEO"
}
/**
 * The type of device the speech was recorded with.
 */
export declare enum RecognitionMetadataRecordingDeviceTypeEnum {
    RecordingDeviceTypeUnspecified = "RECORDING_DEVICE_TYPE_UNSPECIFIED",
    Smartphone = "SMARTPHONE",
    Pc = "PC",
    PhoneLine = "PHONE_LINE",
    Vehicle = "VEHICLE",
    OtherOutdoorDevice = "OTHER_OUTDOOR_DEVICE",
    OtherIndoorDevice = "OTHER_INDOOR_DEVICE"
}
/**
 * Description of audio data to be recognized.
 */
export declare class RecognitionMetadata extends SpeakeasyBase {
    /**
     * Description of the content. Eg. "Recordings of federal supreme court hearings from 2012".
     */
    audioTopic?: string;
    /**
     * The industry vertical to which this speech recognition request most closely applies. This is most indicative of the topics contained in the audio. Use the 6-digit NAICS code to identify the industry vertical - see https://www.naics.com/search/.
     */
    industryNaicsCodeOfAudio?: number;
    /**
     * The use case most closely describing the audio content to be recognized.
     */
    interactionType?: RecognitionMetadataInteractionTypeEnum;
    /**
     * The audio type that most closely describes the audio being recognized.
     */
    microphoneDistance?: RecognitionMetadataMicrophoneDistanceEnum;
    /**
     * The original media the speech was recorded on.
     */
    originalMediaType?: RecognitionMetadataOriginalMediaTypeEnum;
    /**
     * Mime type of the original audio file. For example `audio/m4a`, `audio/x-alaw-basic`, `audio/mp3`, `audio/3gpp`. A list of possible audio mime types is maintained at http://www.iana.org/assignments/media-types/media-types.xhtml#audio
     */
    originalMimeType?: string;
    /**
     * The device used to make the recording. Examples 'Nexus 5X' or 'Polycom SoundStation IP 6000' or 'POTS' or 'VoIP' or 'Cardioid Microphone'.
     */
    recordingDeviceName?: string;
    /**
     * The type of device the speech was recorded with.
     */
    recordingDeviceType?: RecognitionMetadataRecordingDeviceTypeEnum;
}
