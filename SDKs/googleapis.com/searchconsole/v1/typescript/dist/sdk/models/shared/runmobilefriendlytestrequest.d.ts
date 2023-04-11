import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Mobile-friendly test request.
 */
export declare class RunMobileFriendlyTestRequest extends SpeakeasyBase {
    /**
     * Whether or not screenshot is requested. Default is false.
     */
    requestScreenshot?: boolean;
    /**
     * URL for inspection.
     */
    url?: string;
}
