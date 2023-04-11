import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Informations about the Inputs of a Meter or Folder
 */
export declare class InputInformation extends SpeakeasyBase {
    /**
     * The Name of the Input
     */
    name?: string;
    /**
     * The Number of this Input. Use this as ID to switch it on or off.
     */
    number?: number;
}
