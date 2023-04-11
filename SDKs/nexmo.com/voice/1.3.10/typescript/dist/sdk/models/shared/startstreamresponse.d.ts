import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Ok
 */
export declare class StartStreamResponse extends SpeakeasyBase {
    /**
     * Description of the action taken
     */
    message?: string;
    /**
     * The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls
     */
    uuid?: string;
}
