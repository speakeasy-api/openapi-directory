import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ResourceName } from "./googleclouddialogflowcxv3beta1resourcename";
/**
 * The type of the resources where the message is found.
 */
export declare enum GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED",
    Agent = "AGENT",
    Intent = "INTENT",
    IntentTrainingPhrase = "INTENT_TRAINING_PHRASE",
    IntentParameter = "INTENT_PARAMETER",
    Intents = "INTENTS",
    IntentTrainingPhrases = "INTENT_TRAINING_PHRASES",
    EntityType = "ENTITY_TYPE",
    EntityTypes = "ENTITY_TYPES",
    Webhook = "WEBHOOK",
    Flow = "FLOW",
    Page = "PAGE",
    Pages = "PAGES",
    TransitionRouteGroup = "TRANSITION_ROUTE_GROUP"
}
/**
 * Indicates the severity of the message.
 */
export declare enum GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR"
}
/**
 * Agent/flow validation message.
 */
export declare class GoogleCloudDialogflowCxV3beta1ValidationMessage extends SpeakeasyBase {
    /**
     * The message detail.
     */
    detail?: string;
    /**
     * The resource names of the resources where the message is found.
     */
    resourceNames?: GoogleCloudDialogflowCxV3beta1ResourceName[];
    /**
     * The type of the resources where the message is found.
     */
    resourceType?: GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum;
    /**
     * The names of the resources where the message is found.
     */
    resources?: string[];
    /**
     * Indicates the severity of the message.
     */
    severity?: GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum;
}
