import { SpeakeasyBase } from "../../../internal/utils";
import { ScreenshotType } from "./screenshottype";
/**
 * successful operation
 */
export declare class ScreenshotDetails extends SpeakeasyBase {
    callbackUrl?: string;
    deferTime?: number;
    screenshots?: ScreenshotType[];
    testId?: string;
    testStatus?: string;
    url?: string;
}
