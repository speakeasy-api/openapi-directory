import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the user in the request. The field `userId` is associated with this type.
 */
export declare enum UserTypeEnum {
    UserIdTypeUnspecified = "USER_ID_TYPE_UNSPECIFIED",
    UserId = "USER_ID",
    ClientId = "CLIENT_ID"
}
/**
 * Contains information to identify a particular user uniquely.
 */
export declare class User extends SpeakeasyBase {
    /**
     * Type of the user in the request. The field `userId` is associated with this type.
     */
    type?: UserTypeEnum;
    /**
     * Unique Id of the user for which the data is being requested.
     */
    userId?: string;
}
