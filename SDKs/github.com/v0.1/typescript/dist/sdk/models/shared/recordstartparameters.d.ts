import { SpeakeasyBase } from "../../../internal/utils";
/**
 * File format (extension)
 */
export declare enum RecordStartParametersFileFormatEnum {
    Wav = "wav",
    Mp3 = "mp3"
}
/**
 * POST parameters
 */
export declare class RecordStartParameters extends SpeakeasyBase {
    /**
     * Unique identifier of the call to be recorded
     */
    callUUID?: string;
    /**
     * File format (extension)
     */
    fileFormat?: RecordStartParametersFileFormatEnum;
    /**
     * Recording file name (without extension); if empty, a timestamp based file name will be generated
     */
    fileName?: string;
    /**
     * Directory path/URI where the recording file will be saved
     */
    filePath?: string;
    /**
     * Maximum recording length, in seconds
     */
    timeLimit?: number;
}
