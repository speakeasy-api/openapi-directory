import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetActiveWidgetTokenPathParams extends SpeakeasyBase {
    projectId: number;
    widgetId: number;
}
export declare class ResetActiveWidgetTokenRequest extends SpeakeasyBase {
    pathParams: ResetActiveWidgetTokenPathParams;
}
export declare class ResetActiveWidgetTokenResponse extends SpeakeasyBase {
    activeWidget?: shared.ActiveWidget;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
