import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
/**
 * Max findings configuration per infoType, per content item or long running DlpJob.
 */
export declare class GooglePrivacyDlpV2InfoTypeLimit extends SpeakeasyBase {
    /**
     * Type of information detected by the API.
     */
    infoType?: GooglePrivacyDlpV2InfoType;
    /**
     * Max findings limit for the given infoType.
     */
    maxFindings?: number;
}
