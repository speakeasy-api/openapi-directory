import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ViewsIdGetRequest extends SpeakeasyBase {
    /**
     * The primary key for a page view within a session
     */
    viewId: string;
}
export declare class ViewsIdGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    problemDetail?: shared.ProblemDetail;
    /**
     * A List of session views
     */
    view?: shared.View;
}
