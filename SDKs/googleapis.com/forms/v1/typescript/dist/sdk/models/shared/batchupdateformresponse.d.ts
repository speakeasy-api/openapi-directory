import { SpeakeasyBase } from "../../../internal/utils";
import { Form } from "./form";
import { Response } from "./response";
import { WriteControl } from "./writecontrol";
/**
 * Response to a BatchUpdateFormRequest.
 */
export declare class BatchUpdateFormResponse extends SpeakeasyBase {
    /**
     * A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).
     */
    form?: Form;
    /**
     * The reply of the updates. This maps 1:1 with the update requests, although replies to some requests may be empty.
     */
    replies?: Response[];
    /**
     * Provides control over how write requests are executed.
     */
    writeControl?: WriteControl;
}
