import { SpeakeasyBase } from "../../../internal/utils";
import { AppBundle } from "./appbundle";
import { FileReference } from "./filereference";
import { RoboDirective } from "./robodirective";
import { RoboStartingIntent } from "./robostartingintent";
/**
 * The mode in which Robo should run. Most clients should allow the server to populate this field automatically.
 */
export declare enum AndroidRoboTestRoboModeEnum {
    RoboModeUnspecified = "ROBO_MODE_UNSPECIFIED",
    RoboVersion1 = "ROBO_VERSION_1",
    RoboVersion2 = "ROBO_VERSION_2"
}
/**
 * A test of an android application that explores the application on a virtual or physical Android Device, finding culprits and crashes as it goes.
 */
export declare class AndroidRoboTest extends SpeakeasyBase {
    /**
     * A reference to a file, used for user inputs.
     */
    appApk?: FileReference;
    /**
     * An Android App Bundle file format, containing a BundleConfig.pb file, a base module directory, zero or more dynamic feature module directories. See https://developer.android.com/guide/app-bundle/build for guidance on building App Bundles.
     */
    appBundle?: AppBundle;
    /**
     * The initial activity that should be used to start the app.
     */
    appInitialActivity?: string;
    /**
     * The java package for the application under test. The default value is determined by examining the application's manifest.
     */
    appPackageId?: string;
    /**
     * The max depth of the traversal stack Robo can explore. Needs to be at least 2 to make Robo explore the app beyond the first activity. Default is 50.
     */
    maxDepth?: number;
    /**
     * The max number of steps Robo can execute. Default is no limit.
     */
    maxSteps?: number;
    /**
     * A set of directives Robo should apply during the crawl. This allows users to customize the crawl. For example, the username and password for a test account can be provided.
     */
    roboDirectives?: RoboDirective[];
    /**
     * The mode in which Robo should run. Most clients should allow the server to populate this field automatically.
     */
    roboMode?: AndroidRoboTestRoboModeEnum;
    /**
     * A reference to a file, used for user inputs.
     */
    roboScript?: FileReference;
    /**
     * The intents used to launch the app for the crawl. If none are provided, then the main launcher activity is launched. If some are provided, then only those provided are launched (the main launcher activity must be provided explicitly).
     */
    startingIntents?: RoboStartingIntent[];
}
