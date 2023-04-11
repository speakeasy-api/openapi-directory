import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartScreenshotTestSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class StartScreenshotTestResponse extends SpeakeasyBase {
    /**
     * Access denied. Auth error.
     */
    accessDenied?: shared.AccessDenied;
    contentType: string;
    /**
     * Access denied. Auth error.
     */
    forbidden?: shared.Forbidden;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    startScreenshotBadRequest?: shared.StartScreenshotBadRequest;
    /**
     * successful operation
     */
    startScreenshotSuccess?: shared.StartScreenshotSuccess;
}
