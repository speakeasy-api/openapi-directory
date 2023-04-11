import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PatchSchemaOperationsOpEnum {
    Add = "add",
    Replace = "replace",
    Remove = "remove"
}
export declare class PatchSchemaOperations extends SpeakeasyBase {
    op: PatchSchemaOperationsOpEnum;
    path?: string;
    /**
     * Corresponding 'value' of that field specified by 'path'
     */
    value?: string;
}
export declare enum PatchSchemaSchemasEnum {
    UrnIetfParamsScimApiMessages20PatchOp = "urn:ietf:params:scim:api:messages:2.0:PatchOp"
}
export declare class PatchSchema extends SpeakeasyBase {
    /**
     * patch operations list
     */
    operations: PatchSchemaOperations[];
    schemas: PatchSchemaSchemasEnum[];
}
