import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteActiveWidgetPathParams extends SpeakeasyBase {
    projectId: number;
    widgetId: number;
}
export declare class DeleteActiveWidgetRequest extends SpeakeasyBase {
    pathParams: DeleteActiveWidgetPathParams;
}
export declare class DeleteActiveWidgetResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
