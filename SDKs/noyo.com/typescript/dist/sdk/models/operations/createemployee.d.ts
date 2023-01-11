import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateEmployeePathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class CreateEmployeeRequest extends SpeakeasyBase {
    pathParams: CreateEmployeePathParams;
    request: shared.EmployeeCreateRequest;
}
export declare class CreateEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    employeeResult?: shared.EmployeeResult;
    statusCode: number;
}
