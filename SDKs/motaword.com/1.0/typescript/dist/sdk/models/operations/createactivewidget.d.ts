import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateActiveWidgetRequest extends SpeakeasyBase {
    activeWidget?: shared.ActiveWidget;
    /**
     * Continuous project ID
     */
    projectId: number;
}
export declare class CreateActiveWidgetResponse extends SpeakeasyBase {
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
