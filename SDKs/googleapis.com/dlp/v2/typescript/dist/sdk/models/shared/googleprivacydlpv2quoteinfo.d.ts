import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DateTime } from "./googleprivacydlpv2datetime";
/**
 * Message for infoType-dependent details parsed from quote.
 */
export declare class GooglePrivacyDlpV2QuoteInfo extends SpeakeasyBase {
    /**
     * Message for a date time object. e.g. 2018-01-01, 5th August.
     */
    dateTime?: GooglePrivacyDlpV2DateTime;
}
