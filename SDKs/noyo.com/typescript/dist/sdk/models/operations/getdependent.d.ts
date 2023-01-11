import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDependentPathParams extends SpeakeasyBase {
    dependentId: string;
}
export declare class GetDependentRequest extends SpeakeasyBase {
    pathParams: GetDependentPathParams;
}
export declare class GetDependentResponse extends SpeakeasyBase {
    contentType: string;
    dependentResult?: shared.DependentResult;
    statusCode: number;
}
