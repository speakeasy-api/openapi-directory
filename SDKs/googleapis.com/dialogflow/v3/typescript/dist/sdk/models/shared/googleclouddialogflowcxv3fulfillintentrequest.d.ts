import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Match } from "./googleclouddialogflowcxv3match";
import { GoogleCloudDialogflowCxV3MatchIntentRequest } from "./googleclouddialogflowcxv3matchintentrequest";
import { GoogleCloudDialogflowCxV3OutputAudioConfig } from "./googleclouddialogflowcxv3outputaudioconfig";
/**
 * Request of FulfillIntent
 */
export declare class GoogleCloudDialogflowCxV3FulfillIntentRequest extends SpeakeasyBase {
    /**
     * Represents one match result of MatchIntent.
     */
    match?: GoogleCloudDialogflowCxV3Match;
    /**
     * Request of MatchIntent.
     */
    matchIntentRequest?: GoogleCloudDialogflowCxV3MatchIntentRequest;
    /**
     * Instructs the speech synthesizer how to generate the output audio content.
     */
    outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;
}
