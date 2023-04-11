import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
/**
 * Statistics regarding a specific InfoType.
 */
export declare class GooglePrivacyDlpV2InfoTypeStats extends SpeakeasyBase {
    /**
     * Number of findings for this infoType.
     */
    count?: string;
    /**
     * Type of information detected by the API.
     */
    infoType?: GooglePrivacyDlpV2InfoType;
}
