import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDependentPathParams extends SpeakeasyBase {
    employeeId: string;
}
export declare class CreateDependentRequest extends SpeakeasyBase {
    pathParams: CreateDependentPathParams;
    request: shared.DependentCreateRequest;
}
export declare class CreateDependentResponse extends SpeakeasyBase {
    contentType: string;
    dependentResult?: shared.DependentResult;
    statusCode: number;
}
