import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ViewsIdDeleteRequest extends SpeakeasyBase {
    /**
     * The primary key for a page view within a session
     */
    viewId: string;
}
export declare class ViewsIdDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    problemDetail?: shared.ProblemDetail;
}
