import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentInput } from "./googleclouddialogflowv2intent";
/**
 * The request message for Intents.BatchDeleteIntents.
 */
export declare class GoogleCloudDialogflowV2BatchDeleteIntentsRequestInput extends SpeakeasyBase {
    /**
     * Required. The collection of intents to delete. Only intent `name` must be filled in.
     */
    intents?: GoogleCloudDialogflowV2IntentInput[];
}
