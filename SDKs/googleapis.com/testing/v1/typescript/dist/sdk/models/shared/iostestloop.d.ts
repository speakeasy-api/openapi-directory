import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
/**
 * A test of an iOS application that implements one or more game loop scenarios. This test type accepts an archived application (.ipa file) and a list of integer scenarios that will be executed on the app sequentially.
 */
export declare class IosTestLoop extends SpeakeasyBase {
    /**
     * Output only. The bundle id for the application under test.
     */
    appBundleId?: string;
    /**
     * A reference to a file, used for user inputs.
     */
    appIpa?: FileReference;
    /**
     * The list of scenarios that should be run during the test. Defaults to the single scenario 0 if unspecified.
     */
    scenarios?: number[];
}
