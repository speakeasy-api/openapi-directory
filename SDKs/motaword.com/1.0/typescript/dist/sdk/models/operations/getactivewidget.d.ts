import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetActiveWidgetRequest extends SpeakeasyBase {
    /**
     * Continuous Project ID
     */
    projectId: number;
    /**
     * Active widget ID belonging to this Continuous Project
     */
    widgetId: number;
}
export declare class GetActiveWidgetResponse extends SpeakeasyBase {
    /**
     * Active widget details
     */
    activeWidget?: shared.ActiveWidget;
    contentType: string;
    /**
     * ProjectNotFound | ActiveWidgetNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
