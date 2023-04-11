import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AnnotatedMessagePart } from "./googleclouddialogflowv2beta1annotatedmessagepart";
/**
 * Represents the result of annotation for the message.
 */
export declare class GoogleCloudDialogflowV2beta1MessageAnnotation extends SpeakeasyBase {
    /**
     * Required. Indicates whether the text message contains entities.
     */
    containEntities?: boolean;
    /**
     * Optional. The collection of annotated message parts ordered by their position in the message. You can recover the annotated message by concatenating [AnnotatedMessagePart.text].
     */
    parts?: GoogleCloudDialogflowV2beta1AnnotatedMessagePart[];
}
