import { SpeakeasyBase } from "../../../internal/utils";
import { Request } from "./request";
import { WriteControl } from "./writecontrol";
/**
 * Request message for PresentationsService.BatchUpdatePresentation.
 */
export declare class BatchUpdatePresentationRequest extends SpeakeasyBase {
    /**
     * A list of updates to apply to the presentation.
     */
    requests?: Request[];
    /**
     * Provides control over how write requests are executed.
     */
    writeControl?: WriteControl;
}
