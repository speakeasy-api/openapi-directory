import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetAccessEntry } from "./datasetaccessentry";
import { DatasetReference } from "./datasetreference";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { RoutineReference } from "./routinereference";
import { TableReference } from "./tablereference";
export declare class DatasetAccess extends SpeakeasyBase {
    dataset?: DatasetAccessEntry;
    /**
     * [Pick one] A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. Example: "example.com". Maps to IAM policy member "domain:DOMAIN".
     */
    domain?: string;
    /**
     * [Pick one] An email address of a Google Group to grant access to. Maps to IAM policy member "group:GROUP".
     */
    groupByEmail?: string;
    /**
     * [Pick one] Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group.
     */
    iamMember?: string;
    /**
     * [Required] An IAM role ID that should be granted to the user, group, or domain specified in this access entry. The following legacy mappings will be applied: OWNER  roles/bigquery.dataOwner WRITER  roles/bigquery.dataEditor READER  roles/bigquery.dataViewer This field will accept any of the above formats, but will return only the legacy format. For example, if you set this field to "roles/bigquery.dataOwner", it will be returned back as "OWNER".
     */
    role?: string;
    routine?: RoutineReference;
    /**
     * [Pick one] A special group to grant access to. Possible values include: projectOwners: Owners of the enclosing project. projectReaders: Readers of the enclosing project. projectWriters: Writers of the enclosing project. allAuthenticatedUsers: All authenticated BigQuery users. Maps to similarly-named IAM members.
     */
    specialGroup?: string;
    /**
     * [Pick one] An email address of a user to grant access to. For example: fred@example.com. Maps to IAM policy member "user:EMAIL" or "serviceAccount:EMAIL".
     */
    userByEmail?: string;
    view?: TableReference;
}
export declare class DatasetTags extends SpeakeasyBase {
    /**
     * [Required] The namespaced friendly name of the tag key, e.g. "12345/environment" where 12345 is org id.
     */
    tagKey?: string;
    /**
     * [Required] Friendly short name of the tag value, e.g. "production".
     */
    tagValue?: string;
}
/**
 * Successful response
 */
export declare class Dataset extends SpeakeasyBase {
    /**
     * [Optional] An array of objects that define dataset access for one or more entities. You can set this property when inserting or updating a dataset in order to control who is allowed to access the data. If unspecified at dataset creation time, BigQuery adds default dataset access for the following entities: access.specialGroup: projectReaders; access.role: READER; access.specialGroup: projectWriters; access.role: WRITER; access.specialGroup: projectOwners; access.role: OWNER; access.userByEmail: [dataset creator email]; access.role: OWNER;
     */
    access?: DatasetAccess[];
    /**
     * [Output-only] The time when this dataset was created, in milliseconds since the epoch.
     */
    creationTime?: string;
    datasetReference?: DatasetReference;
    /**
     * [Output-only] The default collation of the dataset.
     */
    defaultCollation?: string;
    defaultEncryptionConfiguration?: EncryptionConfiguration;
    /**
     * [Optional] The default partition expiration for all partitioned tables in the dataset, in milliseconds. Once this property is set, all newly-created partitioned tables in the dataset will have an expirationMs property in the timePartitioning settings set to this value, and changing the value will only affect new tables, not existing ones. The storage in a partition will have an expiration time of its partition time plus this value. Setting this property overrides the use of defaultTableExpirationMs for partitioned tables: only one of defaultTableExpirationMs and defaultPartitionExpirationMs will be used for any new partitioned table. If you provide an explicit timePartitioning.expirationMs when creating or updating a partitioned table, that value takes precedence over the default partition expiration time indicated by this property.
     */
    defaultPartitionExpirationMs?: string;
    /**
     * [Output-only] The default rounding mode of the dataset.
     */
    defaultRoundingMode?: string;
    /**
     * [Optional] The default lifetime of all tables in the dataset, in milliseconds. The minimum value is 3600000 milliseconds (one hour). Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table's expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property.
     */
    defaultTableExpirationMs?: string;
    /**
     * [Optional] A user-friendly description of the dataset.
     */
    description?: string;
    /**
     * [Output-only] A hash of the resource.
     */
    etag?: string;
    /**
     * [Optional] A descriptive name for the dataset.
     */
    friendlyName?: string;
    /**
     * [Output-only] The fully-qualified unique name of the dataset in the format projectId:datasetId. The dataset name without the project name is given in the datasetId field. When creating a new dataset, leave this field blank, and instead specify the datasetId field.
     */
    id?: string;
    /**
     * [Optional] Indicates if table names are case insensitive in the dataset.
     */
    isCaseInsensitive?: boolean;
    /**
     * [Output-only] The resource type.
     */
    kind?: string;
    /**
     * The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See Creating and Updating Dataset Labels for more information.
     */
    labels?: Record<string, string>;
    /**
     * [Output-only] The date when this dataset or any of its tables was last modified, in milliseconds since the epoch.
     */
    lastModifiedTime?: string;
    /**
     * The geographic location where the dataset should reside. The default value is US. See details at https://cloud.google.com/bigquery/docs/locations.
     */
    location?: string;
    /**
     * [Optional] Number of hours for the max time travel for all tables in the dataset.
     */
    maxTimeTravelHours?: string;
    /**
     * [Output-only] Reserved for future use.
     */
    satisfiesPzs?: boolean;
    /**
     * [Output-only] A URL that can be used to access the resource again. You can use this URL in Get or Update requests to the resource.
     */
    selfLink?: string;
    /**
     * [Optional] Storage billing model to be used for all tables in the dataset. Can be set to PHYSICAL. Default is LOGICAL.
     */
    storageBillingModel?: string;
    /**
     * [Optional]The tags associated with this dataset. Tag keys are globally unique.
     */
    tags?: DatasetTags[];
}
