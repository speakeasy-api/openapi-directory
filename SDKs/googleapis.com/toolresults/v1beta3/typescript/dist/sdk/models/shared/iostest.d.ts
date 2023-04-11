import { SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
import { IosAppInfo } from "./iosappinfo";
import { IosTestLoop } from "./iostestloop";
import { IosXcTest } from "./iosxctest";
/**
 * A iOS mobile test specification
 */
export declare class IosTest extends SpeakeasyBase {
    /**
     * iOS app information
     */
    iosAppInfo?: IosAppInfo;
    /**
     * A Robo test for an iOS application.
     */
    iosRoboTest?: Record<string, any>;
    /**
     * A game loop test of an iOS application.
     */
    iosTestLoop?: IosTestLoop;
    /**
     * A test of an iOS application that uses the XCTest framework.
     */
    iosXcTest?: IosXcTest;
    /**
     *  A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years.
     */
    testTimeout?: Duration;
}
