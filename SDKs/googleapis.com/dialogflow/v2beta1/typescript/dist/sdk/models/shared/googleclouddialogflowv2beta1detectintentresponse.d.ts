import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1OutputAudioConfig } from "./googleclouddialogflowv2beta1outputaudioconfig";
import { GoogleCloudDialogflowV2beta1QueryResult } from "./googleclouddialogflowv2beta1queryresult";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * The message returned from the DetectIntent method.
 */
export declare class GoogleCloudDialogflowV2beta1DetectIntentResponse extends SpeakeasyBase {
    /**
     * If Knowledge Connectors are enabled, there could be more than one result returned for a given query or event, and this field will contain all results except for the top one, which is captured in query_result. The alternative results are ordered by decreasing `QueryResult.intent_detection_confidence`. If Knowledge Connectors are disabled, this field will be empty until multiple responses for regular intents are supported, at which point those additional results will be surfaced here.
     */
    alternativeQueryResults?: GoogleCloudDialogflowV2beta1QueryResult[];
    /**
     * The audio data bytes encoded as specified in the request. Note: The output audio is generated based on the values of default platform text responses found in the `query_result.fulfillment_messages` field. If multiple default text responses exist, they will be concatenated when generating audio. If no default platform text responses exist, the generated audio content will be empty. In some scenarios, multiple output audio fields may be present in the response structure. In these cases, only the top-most-level audio output has content.
     */
    outputAudio?: string;
    /**
     * Instructs the speech synthesizer how to generate the output audio content. If this audio config is supplied in a request, it overrides all existing text-to-speech settings applied to the agent.
     */
    outputAudioConfig?: GoogleCloudDialogflowV2beta1OutputAudioConfig;
    /**
     * Represents the result of conversational query or event processing.
     */
    queryResult?: GoogleCloudDialogflowV2beta1QueryResult;
    /**
     * The unique identifier of the response. It can be used to locate a response in the training example set or for reporting issues.
     */
    responseId?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    webhookStatus?: GoogleRpcStatus;
}
