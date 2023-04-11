import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for new container versions.
 */
export declare class CreateContainerVersionRequestVersionOptions extends SpeakeasyBase {
    /**
     * The name of the container version to be created.
     */
    name?: string;
    /**
     * The notes of the container version to be created.
     */
    notes?: string;
    /**
     * The creation of this version may be for quick preview and shouldn't be saved.
     */
    quickPreview?: boolean;
}
