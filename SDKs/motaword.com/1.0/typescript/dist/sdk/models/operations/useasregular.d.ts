import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UseAsRegularPathParams extends SpeakeasyBase {
    documentId: number;
}
export declare class UseAsRegularRequest extends SpeakeasyBase {
    pathParams: UseAsRegularPathParams;
    request?: shared.UseAsRegularPayload;
}
export declare class UseAsRegularResponse extends SpeakeasyBase {
    contentType: string;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
