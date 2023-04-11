import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1OutputAudioConfig } from "./googleclouddialogflowcxv3beta1outputaudioconfig";
import { GoogleCloudDialogflowCxV3beta1QueryInput } from "./googleclouddialogflowcxv3beta1queryinput";
import { GoogleCloudDialogflowCxV3beta1QueryParameters } from "./googleclouddialogflowcxv3beta1queryparameters";
/**
 * The request to detect user's intent.
 */
export declare class GoogleCloudDialogflowCxV3beta1DetectIntentRequest extends SpeakeasyBase {
    /**
     * Instructs the speech synthesizer how to generate the output audio content.
     */
    outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig;
    /**
     * Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered.
     */
    queryInput?: GoogleCloudDialogflowCxV3beta1QueryInput;
    /**
     * Represents the parameters of a conversational query.
     */
    queryParams?: GoogleCloudDialogflowCxV3beta1QueryParameters;
}
