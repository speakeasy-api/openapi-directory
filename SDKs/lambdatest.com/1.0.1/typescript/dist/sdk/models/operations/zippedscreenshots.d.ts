import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ZippedScreenshotsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ZippedScreenshotsRequest extends SpeakeasyBase {
    /**
     * Test ID that Zipped Screenshots you want to fetch
     */
    testId: string;
}
export declare class ZippedScreenshotsResponse extends SpeakeasyBase {
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
    screenshotNotFound?: shared.ScreenshotNotFound;
    /**
     * successful operation
     */
    zippedScreenshotsSuccess?: shared.ZippedScreenshotsSuccess;
}
