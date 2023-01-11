import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmployeePathParams extends SpeakeasyBase {
    employeeId: string;
}
export declare class GetEmployeeRequest extends SpeakeasyBase {
    pathParams: GetEmployeePathParams;
}
export declare class GetEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    employeeResult?: shared.EmployeeResult;
    statusCode: number;
}
