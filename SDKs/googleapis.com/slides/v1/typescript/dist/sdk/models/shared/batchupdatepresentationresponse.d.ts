import { SpeakeasyBase } from "../../../internal/utils";
import { Response } from "./response";
import { WriteControl } from "./writecontrol";
/**
 * Response message from a batch update.
 */
export declare class BatchUpdatePresentationResponse extends SpeakeasyBase {
    /**
     * The presentation the updates were applied to.
     */
    presentationId?: string;
    /**
     * The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.
     */
    replies?: Response[];
    /**
     * Provides control over how write requests are executed.
     */
    writeControl?: WriteControl;
}
