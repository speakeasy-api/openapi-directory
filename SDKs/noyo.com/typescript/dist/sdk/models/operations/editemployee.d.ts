import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditEmployeePathParams extends SpeakeasyBase {
    employeeId: string;
    version: string;
}
export declare class EditEmployeeRequest extends SpeakeasyBase {
    pathParams: EditEmployeePathParams;
    request: shared.EmployeeEditRequest;
}
export declare class EditEmployeeResponse extends SpeakeasyBase {
    contentType: string;
    employeeResult?: shared.EmployeeResult;
    statusCode: number;
}
