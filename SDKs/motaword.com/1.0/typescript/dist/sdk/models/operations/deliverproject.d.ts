import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeliverProjectPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeliverProjectRequest extends SpeakeasyBase {
    pathParams: DeliverProjectPathParams;
}
export declare class DeliverProjectResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
