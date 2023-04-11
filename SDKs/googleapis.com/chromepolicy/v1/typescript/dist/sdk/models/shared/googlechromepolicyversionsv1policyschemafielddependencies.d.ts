import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The field and the value it must have for another field to be allowed to be set.
 */
export declare class GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies extends SpeakeasyBase {
    /**
     * The source field which this field depends on.
     */
    sourceField?: string;
    /**
     * The value which the source field must have for this field to be allowed to be set.
     */
    sourceFieldValue?: string;
}
