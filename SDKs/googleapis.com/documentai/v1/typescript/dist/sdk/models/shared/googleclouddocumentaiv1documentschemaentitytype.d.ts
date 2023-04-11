import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues } from "./googleclouddocumentaiv1documentschemaentitytypeenumvalues";
import { GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty } from "./googleclouddocumentaiv1documentschemaentitytypeproperty";
/**
 * EntityType is the wrapper of a label of the corresponding model with detailed attributes and limitations for entity-based processors. Multiple types can also compose a dependency tree to represent nested types.
 */
export declare class GoogleCloudDocumentaiV1DocumentSchemaEntityType extends SpeakeasyBase {
    /**
     * The entity type that this type is derived from. For now, one and only one should be set.
     */
    baseTypes?: string[];
    /**
     * User defined name for the type.
     */
    displayName?: string;
    /**
     * Defines the a list of enum values.
     */
    enumValues?: GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues;
    /**
     * Name of the type. It must be unique within the schema file and cannot be a 'Common Type'. Besides that we use the following naming conventions: - *use `snake_casing`* - name matching is case-sensitive - Maximum 64 characters. - Must start with a letter. - Allowed characters: ASCII letters `[a-z0-9_-]`. (For backward compatibility internal infrastructure and tooling can handle any ascii character) - The `/` is sometimes used to denote a property of a type. For example `line_item/amount`. This convention is deprecated, but will still be honored for backward compatibility.
     */
    name?: string;
    /**
     * Description the nested structure, or composition of an entity.
     */
    properties?: GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty[];
}
