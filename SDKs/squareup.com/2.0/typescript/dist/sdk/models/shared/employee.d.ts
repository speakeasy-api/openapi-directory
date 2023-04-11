import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An employee object that is used by the external API.
 */
export declare class Employee extends SpeakeasyBase {
    /**
     * A read-only timestamp in RFC 3339 format.
     */
    createdAt?: string;
    /**
     * The employee's email address
     */
    email?: string;
    /**
     * The employee's first name.
     */
    firstName?: string;
    /**
     * UUID for this object.
     */
    id?: string;
    /**
     * Whether this employee is the owner of the merchant. Each merchant
     *
     * @remarks
     * has one owner employee, and that employee has full authority over
     * the account.
     */
    isOwner?: boolean;
    /**
     * The employee's last name.
     */
    lastName?: string;
    /**
     * A list of location IDs where this employee has access to.
     */
    locationIds?: string[];
    /**
     * The employee's phone number in E.164 format, i.e. "+12125554250"
     */
    phoneNumber?: string;
    /**
     * Specifies the status of the employees being fetched.
     */
    status?: string;
    /**
     * A read-only timestamp in RFC 3339 format.
     */
    updatedAt?: string;
}
