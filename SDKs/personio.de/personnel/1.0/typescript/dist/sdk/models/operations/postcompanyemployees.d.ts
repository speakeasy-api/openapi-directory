import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Employee gender
 */
export declare enum PostCompanyEmployeesRequestBodyEmployeeGenderEnum {
    Male = "male",
    Female = "female",
    Diverse = "diverse"
}
export declare class PostCompanyEmployeesRequestBody extends SpeakeasyBase {
    /**
     * Employee department
     */
    employeeDepartment?: string;
    /**
     * Employee email
     */
    employeeEmail: string;
    /**
     * Employee first name
     */
    employeeFirstName: string;
    /**
     * Employee gender
     */
    employeeGender?: PostCompanyEmployeesRequestBodyEmployeeGenderEnum;
    /**
     * Employee hire date
     */
    employeeHireDate?: Date;
    /**
     * Employee last name
     */
    employeeLastName: string;
    /**
     * Employee position
     */
    employeePosition?: string;
    /**
     * Employee weekly working hours
     */
    employeeWeeklyHours?: number;
}
export declare class PostCompanyEmployeesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful creation of a employee
     */
    response?: shared.Response;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
