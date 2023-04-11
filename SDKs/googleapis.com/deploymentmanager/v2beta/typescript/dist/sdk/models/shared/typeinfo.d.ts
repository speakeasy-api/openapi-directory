import { SpeakeasyBase } from "../../../internal/utils";
import { TypeInfoSchemaInfo } from "./typeinfoschemainfo";
/**
 * Type Information. Contains detailed information about a composite type, base type, or base type with specific collection.
 */
export declare class TypeInfo extends SpeakeasyBase {
    /**
     * The description of the type.
     */
    description?: string;
    /**
     * For swagger 2.0 externalDocs field will be used. For swagger 1.2 this field will be empty.
     */
    documentationLink?: string;
    /**
     * Output only. Type of the output. Always `deploymentManager#TypeInfo` for TypeInfo.
     */
    kind?: string;
    /**
     * The base type or composite type name.
     */
    name?: string;
    schema?: TypeInfoSchemaInfo;
    /**
     * Output only. Self link for the type provider.
     */
    selfLink?: string;
    /**
     * The title on the API descriptor URL provided.
     */
    title?: string;
}
