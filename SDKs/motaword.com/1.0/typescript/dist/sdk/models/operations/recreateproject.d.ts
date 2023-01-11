import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecreateProjectPathParams extends SpeakeasyBase {
    id: number;
}
export declare class RecreateProjectRequest extends SpeakeasyBase {
    pathParams: RecreateProjectPathParams;
}
export declare class RecreateProjectResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
