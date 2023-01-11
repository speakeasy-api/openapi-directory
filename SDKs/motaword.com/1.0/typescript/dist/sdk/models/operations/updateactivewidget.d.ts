import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateActiveWidgetPathParams extends SpeakeasyBase {
    projectId: number;
    widgetId: number;
}
export declare class UpdateActiveWidgetRequest extends SpeakeasyBase {
    pathParams: UpdateActiveWidgetPathParams;
    request?: shared.ActiveWidget;
}
export declare class UpdateActiveWidgetResponse extends SpeakeasyBase {
    activeWidget?: shared.ActiveWidget;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
