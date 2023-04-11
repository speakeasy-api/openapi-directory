import { SpeakeasyBase } from "../../../internal/utils";
import { PreprocessingConfig } from "./preprocessingconfig";
/**
 * Input asset.
 */
export declare class Input extends SpeakeasyBase {
    /**
     * A unique key for this input. Must be specified when using advanced mapping and edit lists.
     */
    key?: string;
    /**
     * Preprocessing configurations.
     */
    preprocessingConfig?: PreprocessingConfig;
    /**
     * URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`). If empty, the value will be populated from `Job.input_uri`.
     */
    uri?: string;
}
