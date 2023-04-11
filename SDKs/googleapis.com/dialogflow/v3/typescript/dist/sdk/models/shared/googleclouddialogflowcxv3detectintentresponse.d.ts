import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3OutputAudioConfig } from "./googleclouddialogflowcxv3outputaudioconfig";
import { GoogleCloudDialogflowCxV3QueryResult } from "./googleclouddialogflowcxv3queryresult";
/**
 * Response type.
 */
export declare enum GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum {
    ResponseTypeUnspecified = "RESPONSE_TYPE_UNSPECIFIED",
    Partial = "PARTIAL",
    Final = "FINAL"
}
/**
 * The message returned from the DetectIntent method.
 */
export declare class GoogleCloudDialogflowCxV3DetectIntentResponse extends SpeakeasyBase {
    /**
     * Indicates whether the partial response can be cancelled when a later response arrives. e.g. if the agent specified some music as partial response, it can be cancelled.
     */
    allowCancellation?: boolean;
    /**
     * The audio data bytes encoded as specified in the request. Note: The output audio is generated based on the values of default platform text responses found in the `query_result.response_messages` field. If multiple default text responses exist, they will be concatenated when generating audio. If no default platform text responses exist, the generated audio content will be empty. In some scenarios, multiple output audio fields may be present in the response structure. In these cases, only the top-most-level audio output has content.
     */
    outputAudio?: string;
    /**
     * Instructs the speech synthesizer how to generate the output audio content.
     */
    outputAudioConfig?: GoogleCloudDialogflowCxV3OutputAudioConfig;
    /**
     * Represents the result of a conversational query.
     */
    queryResult?: GoogleCloudDialogflowCxV3QueryResult;
    /**
     * Output only. The unique identifier of the response. It can be used to locate a response in the training example set or for reporting issues.
     */
    responseId?: string;
    /**
     * Response type.
     */
    responseType?: GoogleCloudDialogflowCxV3DetectIntentResponseResponseTypeEnum;
}
