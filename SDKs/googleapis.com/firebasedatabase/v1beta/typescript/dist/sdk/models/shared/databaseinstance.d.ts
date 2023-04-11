import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The database's lifecycle state. Read-only.
 */
export declare enum DatabaseInstanceStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Disabled = "DISABLED",
    Deleted = "DELETED"
}
/**
 * Immutable. The database instance type. On creation only USER_DATABASE is allowed, which is also the default when omitted.
 */
export declare enum DatabaseInstanceTypeEnum {
    DatabaseInstanceTypeUnspecified = "DATABASE_INSTANCE_TYPE_UNSPECIFIED",
    DefaultDatabase = "DEFAULT_DATABASE",
    UserDatabase = "USER_DATABASE"
}
/**
 * Representation of a Realtime Database instance. Details on interacting with contents of a DatabaseInstance can be found at: https://firebase.google.com/docs/database/rest/start.
 */
export declare class DatabaseInstance extends SpeakeasyBase {
    /**
     * Output only. Output Only. The globally unique hostname of the database.
     */
    databaseUrl?: string;
    /**
     * The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`.
     */
    name?: string;
    /**
     * Output only. The resource name of the project this instance belongs to. For example: `projects/{project-number}`.
     */
    project?: string;
    /**
     * Output only. The database's lifecycle state. Read-only.
     */
    state?: DatabaseInstanceStateEnum;
    /**
     * Immutable. The database instance type. On creation only USER_DATABASE is allowed, which is also the default when omitted.
     */
    type?: DatabaseInstanceTypeEnum;
}
/**
 * Representation of a Realtime Database instance. Details on interacting with contents of a DatabaseInstance can be found at: https://firebase.google.com/docs/database/rest/start.
 */
export declare class DatabaseInstanceInput extends SpeakeasyBase {
    /**
     * The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`.
     */
    name?: string;
    /**
     * Immutable. The database instance type. On creation only USER_DATABASE is allowed, which is also the default when omitted.
     */
    type?: DatabaseInstanceTypeEnum;
}
