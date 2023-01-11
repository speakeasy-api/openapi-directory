import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateActiveWidgetPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class CreateActiveWidgetRequest extends SpeakeasyBase {
    pathParams: CreateActiveWidgetPathParams;
    request?: shared.ActiveWidget;
}
export declare class CreateActiveWidgetResponse extends SpeakeasyBase {
    activeWidget?: shared.ActiveWidget;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
