import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditDependentPathParams extends SpeakeasyBase {
    dependentId: string;
    version: string;
}
export declare class EditDependentRequest extends SpeakeasyBase {
    pathParams: EditDependentPathParams;
    request: shared.DependentEditRequest;
}
export declare class EditDependentResponse extends SpeakeasyBase {
    contentType: string;
    dependentResult?: shared.DependentResult;
    statusCode: number;
}
