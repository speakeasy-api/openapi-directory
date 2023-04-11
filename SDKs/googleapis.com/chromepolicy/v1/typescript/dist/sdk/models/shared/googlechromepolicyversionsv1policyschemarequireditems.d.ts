import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The fields that will become required based on the value of this field.
 */
export declare class GoogleChromePolicyVersionsV1PolicySchemaRequiredItems extends SpeakeasyBase {
    /**
     * The value(s) of the field that provoke required field enforcement. An empty field_conditions implies that any value assigned to this field will provoke required field enforcement.
     */
    fieldConditions?: string[];
    /**
     * The fields that are required as a consequence of the field conditions.
     */
    requiredFields?: string[];
}
