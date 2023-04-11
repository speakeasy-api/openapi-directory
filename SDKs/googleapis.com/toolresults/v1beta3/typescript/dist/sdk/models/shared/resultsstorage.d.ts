import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
/**
 * The storage for test results.
 */
export declare class ResultsStorage extends SpeakeasyBase {
    /**
     * A reference to a file.
     */
    resultsStoragePath?: FileReference;
    /**
     * A reference to a file.
     */
    xunitXmlFile?: FileReference;
}
