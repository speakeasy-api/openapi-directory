import { SpeakeasyBase } from "../../../internal/utils";
export declare class EmployeeSecretEmployeeSecret extends SpeakeasyBase {
    /**
     * The employee secrets' created
     */
    created?: Date;
    /**
     * The employee secrets' name
     */
    name?: string;
    /**
     * The employee secrets' value
     */
    value?: string;
}
/**
 * The employee secret object.
 */
export declare class EmployeeSecret extends SpeakeasyBase {
    employeeSecret?: EmployeeSecretEmployeeSecret;
}
