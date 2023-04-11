import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeardownTag extends SpeakeasyBase {
    /**
     * If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status.
     */
    stopTeardownOnFailure?: boolean;
    /**
     * The name of the teardown tag.
     */
    tagName?: string;
}
