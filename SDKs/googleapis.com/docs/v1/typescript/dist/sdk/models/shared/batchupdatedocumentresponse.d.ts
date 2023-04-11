import { SpeakeasyBase } from "../../../internal/utils";
import { Response } from "./response";
import { WriteControl } from "./writecontrol";
/**
 * Response message from a BatchUpdateDocument request.
 */
export declare class BatchUpdateDocumentResponse extends SpeakeasyBase {
    /**
     * The ID of the document to which the updates were applied to.
     */
    documentId?: string;
    /**
     * The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.
     */
    replies?: Response[];
    /**
     * Provides control over how write requests are executed.
     */
    writeControl?: WriteControl;
}
