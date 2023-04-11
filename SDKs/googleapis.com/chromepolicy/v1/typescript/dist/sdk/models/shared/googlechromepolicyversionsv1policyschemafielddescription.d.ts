import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1FieldConstraints } from "./googlechromepolicyversionsv1fieldconstraints";
import { GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies } from "./googlechromepolicyversionsv1policyschemafielddependencies";
import { GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription } from "./googlechromepolicyversionsv1policyschemafieldknownvaluedescription";
import { GoogleChromePolicyVersionsV1PolicySchemaRequiredItems } from "./googlechromepolicyversionsv1policyschemarequireditems";
/**
 * Provides detailed information for a particular field that is part of a PolicySchema.
 */
export declare class GoogleChromePolicyVersionsV1PolicySchemaFieldDescription extends SpeakeasyBase {
    /**
     * Output only. Client default if the policy is unset.
     */
    defaultValue?: any;
    /**
     * Deprecated. Use name and field_description instead. The description for the field.
     */
    description?: string;
    /**
     * Output only. The name of the field for associated with this description.
     */
    field?: string;
    /**
     * Information about any range constraints.
     */
    fieldConstraints?: GoogleChromePolicyVersionsV1FieldConstraints;
    /**
     * Output only. Provides a list of fields and values. At least one of the fields must have the corresponding value in order for this field to be allowed to be set.
     */
    fieldDependencies?: GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies[];
    /**
     * Output only. The description of the field.
     */
    fieldDescription?: string;
    /**
     * Output only. Any input constraints associated on the values for the field.
     */
    inputConstraint?: string;
    /**
     * Output only. If the field has a set of known values, this field will provide a description for these values.
     */
    knownValueDescriptions?: GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription[];
    /**
     * Output only. The name of the field.
     */
    name?: string;
    /**
     * Output only. Provides the description of the fields nested in this field, if the field is a message type that defines multiple fields.
     */
    nestedFieldDescriptions?: GoogleChromePolicyVersionsV1PolicySchemaFieldDescription[];
    /**
     * Output only. Provides a list of fields that are required to be set if this field has a certain value.
     */
    requiredItems?: GoogleChromePolicyVersionsV1PolicySchemaRequiredItems[];
}
