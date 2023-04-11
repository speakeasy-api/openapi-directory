import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopScreenshotsTestSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class StopScreenshotsTestRequest extends SpeakeasyBase {
    /**
     * Test ID that details you want to stop
     */
    testId: string;
}
export declare class StopScreenshotsTestResponse extends SpeakeasyBase {
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
     * Resource not found
     */
    stopScreenshotNotFound?: shared.StopScreenshotNotFound;
    /**
     * successful operation
     */
    stopScreenshotSuccess?: shared.StopScreenshotSuccess;
}
