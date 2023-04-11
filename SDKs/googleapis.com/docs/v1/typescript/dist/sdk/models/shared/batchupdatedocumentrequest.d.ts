import { SpeakeasyBase } from "../../../internal/utils";
import { Request } from "./request";
import { WriteControl } from "./writecontrol";
/**
 * Request message for BatchUpdateDocument.
 */
export declare class BatchUpdateDocumentRequest extends SpeakeasyBase {
    /**
     * A list of updates to apply to the document.
     */
    requests?: Request[];
    /**
     * Provides control over how write requests are executed.
     */
    writeControl?: WriteControl;
}
