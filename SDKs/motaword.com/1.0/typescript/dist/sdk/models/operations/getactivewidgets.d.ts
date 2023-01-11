import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetActiveWidgetsPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class GetActiveWidgetsRequest extends SpeakeasyBase {
    pathParams: GetActiveWidgetsPathParams;
}
export declare class GetActiveWidgetsResponse extends SpeakeasyBase {
    activeWidgetList?: shared.ActiveWidgetList;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
