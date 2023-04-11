import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetupTag extends SpeakeasyBase {
    /**
     * If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status.
     */
    stopOnSetupFailure?: boolean;
    /**
     * The name of the setup tag.
     */
    tagName?: string;
}
