import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EntityTypeEntity } from "./googleclouddialogflowv2entitytypeentity";
/**
 * Optional. Indicates whether the entity type can be automatically expanded.
 */
export declare enum GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum {
    AutoExpansionModeUnspecified = "AUTO_EXPANSION_MODE_UNSPECIFIED",
    AutoExpansionModeDefault = "AUTO_EXPANSION_MODE_DEFAULT"
}
/**
 * Required. Indicates the kind of entity type.
 */
export declare enum GoogleCloudDialogflowV2EntityTypeKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED",
    KindMap = "KIND_MAP",
    KindList = "KIND_LIST",
    KindRegexp = "KIND_REGEXP"
}
/**
 * Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview).
 */
export declare class GoogleCloudDialogflowV2EntityType extends SpeakeasyBase {
    /**
     * Optional. Indicates whether the entity type can be automatically expanded.
     */
    autoExpansionMode?: GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum;
    /**
     * Required. The name of the entity type.
     */
    displayName?: string;
    /**
     * Optional. Enables fuzzy entity extraction during classification.
     */
    enableFuzzyExtraction?: boolean;
    /**
     * Optional. The collection of entity entries associated with the entity type.
     */
    entities?: GoogleCloudDialogflowV2EntityTypeEntity[];
    /**
     * Required. Indicates the kind of entity type.
     */
    kind?: GoogleCloudDialogflowV2EntityTypeKindEnum;
    /**
     * The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects//agent/entityTypes/`.
     */
    name?: string;
}
