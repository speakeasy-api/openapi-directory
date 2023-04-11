import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The policy that governs how to treat a disabled label, field, or selection choice in different contexts.
 */
export declare class GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy extends SpeakeasyBase {
    /**
     * Whether to hide this disabled object in the search menu for Drive items. * When `false`, the object is generally shown in the UI as disabled but it appears in the search results when searching for Drive items. * When `true`, the object is generally hidden in the UI when searching for Drive items.
     */
    hideInSearch?: boolean;
    /**
     * Whether to show this disabled object in the apply menu on Drive items. * When `true`, the object is generally shown in the UI as disabled and is unselectable. * When `false`, the object is generally hidden in the UI.
     */
    showInApply?: boolean;
}
