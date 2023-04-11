import { SpeakeasyBase } from "../../../internal/utils";
export declare class CustomerReturnReason extends SpeakeasyBase {
    /**
     * Description of the reason.
     */
    description?: string;
    /**
     * Code of the return reason. Acceptable values are: - "`betterPriceFound`" - "`changedMind`" - "`damagedOrDefectiveItem`" - "`didNotMatchDescription`" - "`doesNotFit`" - "`expiredItem`" - "`incorrectItemReceived`" - "`noLongerNeeded`" - "`notSpecified`" - "`orderedWrongItem`" - "`other`" - "`qualityNotExpected`" - "`receivedTooLate`" - "`undeliverable`"
     */
    reasonCode?: string;
}
