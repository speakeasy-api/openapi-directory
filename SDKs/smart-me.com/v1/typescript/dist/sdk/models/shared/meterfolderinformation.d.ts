import { SpeakeasyBase } from "../../../internal/utils";
import { InputInformation } from "./inputinformation";
import { OutputInformation } from "./outputinformation";
/**
 * Container Class for the Web API
 */
export declare class MeterFolderInformation extends SpeakeasyBase {
    /**
     * The Version of the Communication Module (if exists)
     */
    communicationModuleFirmwareVersion?: number;
    /**
     * The Version of the Communication Module (if exists)
     */
    communicationModuleHardwareVersion?: number;
    /**
     * The Firmware Version of a Meter
     */
    firmwareVersion?: number;
    /**
     * The Hardware Version of a Meter.
     */
    hardwareVersion?: number;
    /**
     * Informations about the available Inputs
     */
    inputInformations?: InputInformation[];
    /**
     * Flag if it's a Folder or a Meter
     */
    isFolder?: boolean;
    /**
     * Name of the Meter or Folder
     */
    name?: string;
    /**
     * Informations about the available Outputs
     */
    outputInformations?: OutputInformation[];
}
