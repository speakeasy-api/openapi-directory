import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCompanyEmployeesResponse extends SpeakeasyBase {
    contentType: string;
    employeesResponse?: shared.EmployeesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
