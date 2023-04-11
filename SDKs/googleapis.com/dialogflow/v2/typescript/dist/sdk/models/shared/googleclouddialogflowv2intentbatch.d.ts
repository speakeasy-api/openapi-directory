import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentInput } from "./googleclouddialogflowv2intent";
/**
 * This message is a wrapper around a collection of intents.
 */
export declare class GoogleCloudDialogflowV2IntentBatchInput extends SpeakeasyBase {
    /**
     * A collection of intents.
     */
    intents?: GoogleCloudDialogflowV2IntentInput[];
}
