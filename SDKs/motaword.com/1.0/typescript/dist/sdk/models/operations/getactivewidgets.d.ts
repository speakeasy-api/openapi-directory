import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetActiveWidgetsRequest extends SpeakeasyBase {
    /**
     * Continuous Project ID
     */
    projectId: number;
}
export declare class GetActiveWidgetsResponse extends SpeakeasyBase {
    /**
     * List of widgets
     */
    activeWidgetList?: shared.ActiveWidgetList;
    contentType: string;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
