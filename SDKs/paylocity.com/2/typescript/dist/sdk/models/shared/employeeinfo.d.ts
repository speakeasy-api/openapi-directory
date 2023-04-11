import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The employee info model
 */
export declare class EmployeeInfo extends SpeakeasyBase {
    /**
     * Employee Id.<br  /> Max length: 10
     */
    employeeId?: string;
    /**
     * Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20
     */
    statusCode?: string;
    /**
     * Employee current work status type. <br  />Max length: 10
     */
    statusTypeCode?: string;
}
