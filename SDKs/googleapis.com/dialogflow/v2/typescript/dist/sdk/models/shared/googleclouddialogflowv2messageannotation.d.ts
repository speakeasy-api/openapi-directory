import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AnnotatedMessagePart } from "./googleclouddialogflowv2annotatedmessagepart";
/**
 * Represents the result of annotation for the message.
 */
export declare class GoogleCloudDialogflowV2MessageAnnotation extends SpeakeasyBase {
    /**
     * Indicates whether the text message contains entities.
     */
    containEntities?: boolean;
    /**
     * The collection of annotated message parts ordered by their position in the message. You can recover the annotated message by concatenating [AnnotatedMessagePart.text].
     */
    parts?: GoogleCloudDialogflowV2AnnotatedMessagePart[];
}
