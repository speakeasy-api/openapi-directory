import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The UserDTO Class.
 *
 * @remarks
 * Contains relevant fields of User DTO by masking actual User entity's fields in application.
 *
 */
export declare class UserDTO extends SpeakeasyBase {
    /**
     * Account number of the user.It can be any stakeholder of the application.even can be a gym.
     *
     * @remarks
     *
     */
    accountNumber?: string;
    /**
     * Entity number that make a relationship with BOX API DB.
     *
     * @remarks
     *
     */
    externalEntityNumber?: string;
    /**
     * Gaurdian of the this user if he/she is under 18 years old.
     *
     * @remarks
     *
     */
    guardian?: number;
    /**
     * If this user is a gym, then the gym number.
     *
     * @remarks
     *
     */
    gymNumber?: string;
    /**
     * If Someone introduced this user to the system, then that user's UserId.
     *
     * @remarks
     *
     */
    introduceBy?: number;
    /**
     * Name of the user.
     *
     * @remarks
     *
     */
    name?: string;
    /**
     * Unique number maintain by application to idenify user.
     *
     * @remarks
     *
     */
    number?: string;
    /**
     * Type of the user.
     *
     * @remarks
     *
     */
    typeId?: number;
    /**
     * Indentity number(primary key) for user object. Generated in DB table when inserting a record.
     *
     * @remarks
     *
     */
    userId?: number;
}
