import { SpeakeasyBase } from "../../../internal/utils";
import { InputFile } from "./inputfile";
/**
 * Input configuration for datasets.
 */
export declare class DatasetInputConfig extends SpeakeasyBase {
    /**
     * Files containing the sentence pairs to be imported to the dataset.
     */
    inputFiles?: InputFile[];
}
