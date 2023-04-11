import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ScreenshotsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ScreenshotsRequest extends SpeakeasyBase {
    /**
     * Test ID that details you want to fetch
     */
    testId: string;
}
export declare class ScreenshotsResponse extends SpeakeasyBase {
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
     * successful operation
     */
    screenshotDetails?: shared.ScreenshotDetails;
    /**
     * Resource not found
     */
    screenshotNotFound?: shared.ScreenshotNotFound;
}
