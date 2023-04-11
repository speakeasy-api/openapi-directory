import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Match } from "./googleclouddialogflowcxv3beta1match";
import { GoogleCloudDialogflowCxV3beta1MatchIntentRequest } from "./googleclouddialogflowcxv3beta1matchintentrequest";
import { GoogleCloudDialogflowCxV3beta1OutputAudioConfig } from "./googleclouddialogflowcxv3beta1outputaudioconfig";
/**
 * Request of FulfillIntent
 */
export declare class GoogleCloudDialogflowCxV3beta1FulfillIntentRequest extends SpeakeasyBase {
    /**
     * Represents one match result of MatchIntent.
     */
    match?: GoogleCloudDialogflowCxV3beta1Match;
    /**
     * Request of MatchIntent.
     */
    matchIntentRequest?: GoogleCloudDialogflowCxV3beta1MatchIntentRequest;
    /**
     * Instructs the speech synthesizer how to generate the output audio content.
     */
    outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
}
