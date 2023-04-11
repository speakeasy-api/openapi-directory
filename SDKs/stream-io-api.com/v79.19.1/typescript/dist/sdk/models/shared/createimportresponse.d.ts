import { SpeakeasyBase } from "../../../internal/utils";
import { ImportTask } from "./importtask";
/**
 * Successful response
 */
export declare class CreateImportResponse extends SpeakeasyBase {
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
    importTask?: ImportTask;
}
