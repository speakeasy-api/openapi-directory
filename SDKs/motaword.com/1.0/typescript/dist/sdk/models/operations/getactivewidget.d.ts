import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetActiveWidgetPathParams extends SpeakeasyBase {
    projectId: number;
    widgetId: number;
}
export declare class GetActiveWidgetRequest extends SpeakeasyBase {
    pathParams: GetActiveWidgetPathParams;
}
export declare class GetActiveWidgetResponse extends SpeakeasyBase {
    activeWidget?: shared.ActiveWidget;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
