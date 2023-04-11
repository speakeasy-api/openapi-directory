import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class V1Employees {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CreateEmployee
     *
     * @remarks
     *  Use the CreateEmployee endpoint to add an employee to a Square
     * account. Employees created with the Connect API have an initial status
     * of `INACTIVE`. Inactive employees cannot sign in to Square Point of Sale
     * until they are activated from the Square Dashboard. Employee status
     * cannot be changed with the Connect API.
     *
     * Employee entities cannot be deleted. To disable employee profiles,
     * set the employee's status to <code>INACTIVE</code>
     */
    createEmployee(req: shared.V1Employee, security: operations.CreateEmployeeSecurity, config?: AxiosRequestConfig): Promise<operations.CreateEmployeeResponse>;
    /**
     * CreateEmployeeRole
     *
     * @remarks
     * Creates an employee role you can then assign to employees.
     *
     * Square accounts can include any number of roles that can be assigned to
     * employees. These roles define the actions and permissions granted to an
     * employee with that role. For example, an employee with a "Shift Manager"
     * role might be able to issue refunds in Square Point of Sale, whereas an
     * employee with a "Clerk" role might not.
     *
     * Roles are assigned with the [V1UpdateEmployee](https://developer.squareup.com/reference/square_2021-08-18/v1-employees-api/update-employee-role)
     * endpoint. An employee can have only one role at a time.
     *
     * If an employee has no role, they have none of the permissions associated
     * with roles. All employees can accept payments with Square Point of Sale.
     */
    createEmployeeRole(req: shared.V1EmployeeRole, security: operations.CreateEmployeeRoleSecurity, config?: AxiosRequestConfig): Promise<operations.CreateEmployeeRoleResponse>;
    /**
     * ListEmployeeRoles
     *
     * @remarks
     * Provides summary information for all of a business's employee roles.
     */
    listEmployeeRoles(req: operations.ListEmployeeRolesRequest, security: operations.ListEmployeeRolesSecurity, config?: AxiosRequestConfig): Promise<operations.ListEmployeeRolesResponse>;
    /**
     * ListEmployees
     *
     * @remarks
     * Provides summary information for all of a business's employees.
     */
    listEmployees(req: operations.ListEmployeesRequest, security: operations.ListEmployeesSecurity, config?: AxiosRequestConfig): Promise<operations.ListEmployeesResponse>;
    /**
     * RetrieveEmployee
     *
     * @remarks
     * Provides the details for a single employee.
     */
    retrieveEmployee(req: operations.RetrieveEmployeeRequest, security: operations.RetrieveEmployeeSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveEmployeeResponse>;
    /**
     * RetrieveEmployeeRole
     *
     * @remarks
     * Provides the details for a single employee role.
     */
    retrieveEmployeeRole(req: operations.RetrieveEmployeeRoleRequest, security: operations.RetrieveEmployeeRoleSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveEmployeeRoleResponse>;
    /**
     * UpdateEmployee
     */
    updateEmployee(req: operations.UpdateEmployeeRequest, security: operations.UpdateEmployeeSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateEmployeeResponse>;
    /**
     * UpdateEmployeeRole
     *
     * @remarks
     * Modifies the details of an employee role.
     */
    updateEmployeeRole(req: operations.UpdateEmployeeRoleRequest, security: operations.UpdateEmployeeRoleSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateEmployeeRoleResponse>;
}
