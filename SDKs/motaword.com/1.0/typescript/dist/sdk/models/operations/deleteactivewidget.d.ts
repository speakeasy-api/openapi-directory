import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteActiveWidgetRequest extends SpeakeasyBase {
    /**
     * Continuous Project ID
     */
    projectId: number;
    /**
     * Active widget ID belonging to this Continuous Project
     */
    widgetId: number;
}
export declare class DeleteActiveWidgetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFound | ActiveWidgetNotFound | UnauthorizedUser
     */
    error?: shared.ErrorT;
    /**
     * Delete operation result
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
