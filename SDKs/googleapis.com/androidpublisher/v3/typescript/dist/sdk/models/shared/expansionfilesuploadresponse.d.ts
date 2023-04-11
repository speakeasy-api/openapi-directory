import { SpeakeasyBase } from "../../../internal/utils";
import { ExpansionFile } from "./expansionfile";
/**
 * Response for uploading an expansion file.
 */
export declare class ExpansionFilesUploadResponse extends SpeakeasyBase {
    /**
     * An expansion file. The resource for ExpansionFilesService.
     */
    expansionFile?: ExpansionFile;
}
