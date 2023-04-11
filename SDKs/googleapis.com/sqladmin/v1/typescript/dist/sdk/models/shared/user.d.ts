import { SpeakeasyBase } from "../../../internal/utils";
import { SqlServerUserDetails } from "./sqlserveruserdetails";
import { UserPasswordValidationPolicy } from "./userpasswordvalidationpolicy";
/**
 * Dual password status for the user.
 */
export declare enum UserDualPasswordTypeEnum {
    DualPasswordTypeUnspecified = "DUAL_PASSWORD_TYPE_UNSPECIFIED",
    NoModifyDualPassword = "NO_MODIFY_DUAL_PASSWORD",
    NoDualPassword = "NO_DUAL_PASSWORD",
    DualPassword = "DUAL_PASSWORD"
}
/**
 * The user type. It determines the method to authenticate the user during login. The default is the database's built-in user type.
 */
export declare enum UserTypeEnum {
    BuiltIn = "BUILT_IN",
    CloudIamUser = "CLOUD_IAM_USER",
    CloudIamServiceAccount = "CLOUD_IAM_SERVICE_ACCOUNT"
}
/**
 * A Cloud SQL user resource.
 */
export declare class User extends SpeakeasyBase {
    /**
     * Dual password status for the user.
     */
    dualPasswordType?: UserDualPasswordTypeEnum;
    /**
     * This field is deprecated and will be removed from a future version of the API.
     */
    etag?: string;
    /**
     * Optional. The host from which the user can connect. For `insert` operations, host defaults to an empty string. For `update` operations, host is specified as part of the request URL. The host name cannot be updated after insertion. For a MySQL instance, it's required; for a PostgreSQL or SQL Server instance, it's optional.
     */
    host?: string;
    /**
     * The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for `update` because it is already specified on the URL.
     */
    instance?: string;
    /**
     * This is always `sql#user`.
     */
    kind?: string;
    /**
     * The name of the user in the Cloud SQL instance. Can be omitted for `update` because it is already specified in the URL.
     */
    name?: string;
    /**
     * The password for the user.
     */
    password?: string;
    /**
     * User level password validation policy.
     */
    passwordPolicy?: UserPasswordValidationPolicy;
    /**
     * The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for `update` because it is already specified on the URL.
     */
    project?: string;
    /**
     * Represents a Sql Server user on the Cloud SQL instance.
     */
    sqlserverUserDetails?: SqlServerUserDetails;
    /**
     * The user type. It determines the method to authenticate the user during login. The default is the database's built-in user type.
     */
    type?: UserTypeEnum;
}
