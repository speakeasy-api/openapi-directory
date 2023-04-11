import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentInput } from "./googleclouddialogflowv2beta1intent";
/**
 * The request message for Intents.BatchDeleteIntents.
 */
export declare class GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequestInput extends SpeakeasyBase {
    /**
     * Required. The collection of intents to delete. Only intent `name` must be filled in.
     */
    intents?: GoogleCloudDialogflowV2beta1IntentInput[];
}
