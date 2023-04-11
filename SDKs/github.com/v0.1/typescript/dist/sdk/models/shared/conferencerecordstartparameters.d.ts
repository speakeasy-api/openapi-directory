import { SpeakeasyBase } from "../../../internal/utils";
/**
 * File format (extension)
 */
export declare enum ConferenceRecordStartParametersFileFormatEnum {
    Wav = "wav",
    Mp3 = "mp3"
}
/**
 * POST parameters
 */
export declare class ConferenceRecordStartParameters extends SpeakeasyBase {
    /**
     * Name of the conference in question
     */
    conferenceName: string;
    /**
     * File format (extension)
     */
    fileFormat?: ConferenceRecordStartParametersFileFormatEnum;
    /**
     * Recording file name (without extension); if empty, a timestamp based file name will be generated
     */
    fileName?: string;
    /**
     * Directory path/URI where the recording file will be saved
     */
    filePath?: string;
}
