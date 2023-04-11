import { SpeakeasyBase } from "../../../internal/utils";
import { ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle } from "./chromecrosdpanelautosettingsprotopolicyapilifecycle";
import { GoogleChromePolicyVersionsV1AdditionalTargetKeyName } from "./googlechromepolicyversionsv1additionaltargetkeyname";
import { GoogleChromePolicyVersionsV1PolicySchemaFieldDescription } from "./googlechromepolicyversionsv1policyschemafielddescription";
import { GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription } from "./googlechromepolicyversionsv1policyschemanoticedescription";
import { Proto2FileDescriptorProto } from "./proto2filedescriptorproto";
export declare enum GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum {
    TargetResourceUnspecified = "TARGET_RESOURCE_UNSPECIFIED",
    OrgUnit = "ORG_UNIT",
    Group = "GROUP"
}
/**
 * Resource representing a policy schema.
 */
export declare class GoogleChromePolicyVersionsV1PolicySchema extends SpeakeasyBase {
    /**
     * Output only. Specific access restrictions related to this policy.
     */
    accessRestrictions?: string[];
    /**
     * Output only. Additional key names that will be used to identify the target of the policy value. When specifying a `policyTargetKey`, each of the additional keys specified here will have to be included in the `additionalTargetKeys` map.
     */
    additionalTargetKeyNames?: GoogleChromePolicyVersionsV1AdditionalTargetKeyName[];
    /**
     * Title of the category in which a setting belongs.
     */
    categoryTitle?: string;
    /**
     * Describes a complete .proto file.
     */
    definition?: Proto2FileDescriptorProto;
    /**
     * Output only. Detailed description of each field that is part of the schema.
     */
    fieldDescriptions?: GoogleChromePolicyVersionsV1PolicySchemaFieldDescription[];
    /**
     * Format: name=customers/{customer}/policySchemas/{schema_namespace}
     */
    name?: string;
    /**
     * Output only. Special notice messages related to setting certain values in certain fields in the schema.
     */
    notices?: GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription[];
    policyApiLifecycle?: ChromeCrosDpanelAutosettingsProtoPolicyApiLifecycle;
    /**
     * Output only. Description about the policy schema for user consumption.
     */
    policyDescription?: string;
    /**
     * Output only. The fully qualified name of the policy schema. This value is used to fill the field `policy_schema` in PolicyValue when calling BatchInheritOrgUnitPolicies BatchModifyOrgUnitPolicies BatchModifyGroupPolicies or BatchDeleteGroupPolicies.
     */
    schemaName?: string;
    /**
     * Output only. URI to related support article for this schema.
     */
    supportUri?: string;
    /**
     * Output only. Information about applicable target resources for the policy.
     */
    validTargetResources?: GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum[];
}
