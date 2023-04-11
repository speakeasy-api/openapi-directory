import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the `numericIndexingSpec` allows range queries to be supported.
 */
export declare class SchemaFieldSpecNumericIndexingSpec extends SpeakeasyBase {
    /**
     * Maximum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant.
     */
    maxValue?: number;
    /**
     * Minimum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant.
     */
    minValue?: number;
}
/**
 * You can use schemas to add custom fields to user profiles. You can use these fields to store information such as the projects your users work on, their physical locations, their hire dates, or whatever else fits your business needs. For more information, see [Custom User Fields](/admin-sdk/directory/v1/guides/manage-schemas).
 */
export declare class SchemaFieldSpec extends SpeakeasyBase {
    /**
     * Display Name of the field.
     */
    displayName?: string;
    /**
     * The ETag of the field.
     */
    etag?: string;
    /**
     * The unique identifier of the field (Read-only)
     */
    fieldId?: string;
    /**
     * The name of the field.
     */
    fieldName?: string;
    /**
     * The type of the field.
     */
    fieldType?: string;
    /**
     * Boolean specifying whether the field is indexed or not. Default: `true`.
     */
    indexed?: boolean;
    /**
     * The kind of resource this is. For schema fields this is always `admin#directory#schema#fieldspec`.
     */
    kind?: string;
    /**
     * A boolean specifying whether this is a multi-valued field or not. Default: `false`.
     */
    multiValued?: boolean;
    /**
     * Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the `numericIndexingSpec` allows range queries to be supported.
     */
    numericIndexingSpec?: SchemaFieldSpecNumericIndexingSpec;
    /**
     * Specifies who can view values of this field. See [Retrieve users as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin) for more information. Note: It may take up to 24 hours for changes to this field to be reflected.
     */
    readAccessType?: string;
}
