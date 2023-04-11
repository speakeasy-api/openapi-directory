import { SpeakeasyBase } from "../../../internal/utils";
export declare class Webhook extends SpeakeasyBase {
    /**
     * Webhook URL. We will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.
     */
    callbackUrl?: string;
}
