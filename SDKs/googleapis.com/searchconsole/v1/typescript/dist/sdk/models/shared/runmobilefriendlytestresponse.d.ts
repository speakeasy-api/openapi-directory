import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { MobileFriendlyIssue } from "./mobilefriendlyissue";
import { ResourceIssue } from "./resourceissue";
import { TestStatus } from "./teststatus";
/**
 * Test verdict, whether the page is mobile friendly or not.
 */
export declare enum RunMobileFriendlyTestResponseMobileFriendlinessEnum {
    MobileFriendlyTestResultUnspecified = "MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED",
    MobileFriendly = "MOBILE_FRIENDLY",
    NotMobileFriendly = "NOT_MOBILE_FRIENDLY"
}
/**
 * Mobile-friendly test response, including mobile-friendly issues and resource issues.
 */
export declare class RunMobileFriendlyTestResponse extends SpeakeasyBase {
    /**
     * Test verdict, whether the page is mobile friendly or not.
     */
    mobileFriendliness?: RunMobileFriendlyTestResponseMobileFriendlinessEnum;
    /**
     * List of mobile-usability issues.
     */
    mobileFriendlyIssues?: MobileFriendlyIssue[];
    /**
     * Information about embedded resources issues.
     */
    resourceIssues?: ResourceIssue[];
    /**
     * Describe image data.
     */
    screenshot?: Image;
    /**
     * Final state of the test, including error details if necessary.
     */
    testStatus?: TestStatus;
}
