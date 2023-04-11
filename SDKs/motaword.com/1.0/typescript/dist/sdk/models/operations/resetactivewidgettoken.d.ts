import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResetActiveWidgetTokenRequest extends SpeakeasyBase {
    /**
     * Continuous Project ID
     */
    projectId: number;
    /**
     * Active widget ID belonging to this Continuous Project
     */
    widgetId: number;
}
export declare class ResetActiveWidgetTokenResponse extends SpeakeasyBase {
    /**
     * Updated widget details
     */
    activeWidget?: shared.ActiveWidget;
    contentType: string;
    /**
     * ProjectNotFound | ActiveWidgetNotFound | UnauthorizedUser
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
