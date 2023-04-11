import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestrequest";
import { GoogleAppsDriveLabelsV2betaWriteControl } from "./googleappsdrivelabelsv2betawritecontrol";
/**
 * When specified, only certain fields belonging to the indicated view will be returned.
 */
export declare enum GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum {
    LabelViewBasic = "LABEL_VIEW_BASIC",
    LabelViewFull = "LABEL_VIEW_FULL"
}
/**
 * The set of requests for updating aspects of a Label. If any request is not valid, no requests will be applied.
 */
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput extends SpeakeasyBase {
    /**
     * The BCP-47 language code to use for evaluating localized Field labels when `include_label_in_response` is `true`.
     */
    languageCode?: string;
    /**
     * A list of updates to apply to the Label. Requests will be applied in the order they are specified.
     */
    requests?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput[];
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean;
    /**
     * When specified, only certain fields belonging to the indicated view will be returned.
     */
    view?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum;
    /**
     * Provides control over how write requests are executed. When not specified, the last write wins.
     */
    writeControl?: GoogleAppsDriveLabelsV2betaWriteControl;
}
