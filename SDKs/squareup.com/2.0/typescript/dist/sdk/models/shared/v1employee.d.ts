import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents one of a business's employees.
 */
export declare class V1Employee extends SpeakeasyBase {
    /**
     * The IDs of the locations the employee is allowed to clock in at.
     */
    authorizedLocationIds?: string[];
    /**
     * The time when the employee entity was created, in ISO 8601 format.
     */
    createdAt?: string;
    /**
     * The employee's email address.
     */
    email?: string;
    /**
     * An ID the merchant can set to associate the employee with an entity in another system.
     */
    externalId?: string;
    /**
     * The employee's first name.
     */
    firstName: string;
    /**
     * The employee's unique ID.
     */
    id?: string;
    /**
     * The employee's last name.
     */
    lastName: string;
    /**
     * The ids of the employee's associated roles. Currently, you can specify only one or zero roles per employee.
     */
    roleIds?: string[];
    /**
     * Whether the employee is ACTIVE or INACTIVE. Inactive employees cannot sign in to Square Register.Merchants update this field from the Square Dashboard.
     */
    status?: string;
    /**
     * The time when the employee entity was most recently updated, in ISO 8601 format.
     */
    updatedAt?: string;
}
