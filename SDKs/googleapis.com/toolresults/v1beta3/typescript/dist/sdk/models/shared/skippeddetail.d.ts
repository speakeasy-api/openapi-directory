import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for an outcome with a SKIPPED outcome summary.
 */
export declare class SkippedDetail extends SpeakeasyBase {
    /**
     * If the App doesn't support the specific API level.
     */
    incompatibleAppVersion?: boolean;
    /**
     * If the App doesn't run on the specific architecture, for example, x86.
     */
    incompatibleArchitecture?: boolean;
    /**
     * If the requested OS version doesn't run on the specific device model.
     */
    incompatibleDevice?: boolean;
}
