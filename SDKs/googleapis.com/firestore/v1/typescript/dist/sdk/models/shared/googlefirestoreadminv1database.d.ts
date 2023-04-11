import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The App Engine integration mode to use for this database.
 */
export declare enum GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum {
    AppEngineIntegrationModeUnspecified = "APP_ENGINE_INTEGRATION_MODE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
/**
 * The concurrency control mode to use for this database.
 */
export declare enum GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum {
    ConcurrencyModeUnspecified = "CONCURRENCY_MODE_UNSPECIFIED",
    Optimistic = "OPTIMISTIC",
    Pessimistic = "PESSIMISTIC",
    OptimisticWithEntityGroups = "OPTIMISTIC_WITH_ENTITY_GROUPS"
}
/**
 * The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose.
 */
export declare enum GoogleFirestoreAdminV1DatabaseTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED",
    FirestoreNative = "FIRESTORE_NATIVE",
    DatastoreMode = "DATASTORE_MODE"
}
/**
 * A Cloud Firestore Database. Currently only one database is allowed per cloud project; this database must have a `database_id` of '(default)'.
 */
export declare class GoogleFirestoreAdminV1Database extends SpeakeasyBase {
    /**
     * The App Engine integration mode to use for this database.
     */
    appEngineIntegrationMode?: GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum;
    /**
     * The concurrency control mode to use for this database.
     */
    concurrencyMode?: GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum;
    /**
     * Output only. The timestamp at which this database was created.
     */
    createTime?: string;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Output only. The key_prefix for this database. This key_prefix is used, in combination with the project id ("~") to construct the application id that is returned from the Cloud Datastore APIs in Google App Engine first generation runtimes. This value may be empty in which case the appid to use for URL-encoded keys is the project_id (eg: foo instead of v~foo).
     */
    keyPrefix?: string;
    /**
     * The location of the database. Available databases are listed at https://cloud.google.com/firestore/docs/locations.
     */
    locationId?: string;
    /**
     * The resource name of the Database. Format: `projects/{project}/databases/{database}`
     */
    name?: string;
    /**
     * The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose.
     */
    type?: GoogleFirestoreAdminV1DatabaseTypeEnum;
    /**
     * Output only. The system-generated UUID4 for this Database.
     */
    uid?: string;
    /**
     * Output only. The timestamp at which this database was most recently updated. Note this only includes updates to the database resource and not data contained by the database.
     */
    updateTime?: string;
}
/**
 * A Cloud Firestore Database. Currently only one database is allowed per cloud project; this database must have a `database_id` of '(default)'.
 */
export declare class GoogleFirestoreAdminV1DatabaseInput extends SpeakeasyBase {
    /**
     * The App Engine integration mode to use for this database.
     */
    appEngineIntegrationMode?: GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum;
    /**
     * The concurrency control mode to use for this database.
     */
    concurrencyMode?: GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * The location of the database. Available databases are listed at https://cloud.google.com/firestore/docs/locations.
     */
    locationId?: string;
    /**
     * The resource name of the Database. Format: `projects/{project}/databases/{database}`
     */
    name?: string;
    /**
     * The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose.
     */
    type?: GoogleFirestoreAdminV1DatabaseTypeEnum;
}
