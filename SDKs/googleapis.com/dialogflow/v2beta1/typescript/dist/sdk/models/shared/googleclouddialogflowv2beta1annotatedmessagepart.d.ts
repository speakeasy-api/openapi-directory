import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a part of a message possibly annotated with an entity. The part can be an entity or purely a part of the message between two entities or message start/end.
 */
export declare class GoogleCloudDialogflowV2beta1AnnotatedMessagePart extends SpeakeasyBase {
    /**
     * Optional. The [Dialogflow system entity type](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. If this is empty, Dialogflow could not annotate the phrase part with a system entity.
     */
    entityType?: string;
    /**
     * Optional. The [Dialogflow system entity formatted value ](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. For example for a system entity of type `@sys.unit-currency`, this may contain: { "amount": 5, "currency": "USD" }
     */
    formattedValue?: any;
    /**
     * Required. A part of a message possibly annotated with an entity.
     */
    text?: string;
}
