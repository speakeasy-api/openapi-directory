import { SpeakeasyBase } from "../../../internal/utils";
/**
 * HttpRouteRuleMatch criteria for field values that must stay within the specified integer range.
 */
export declare class Int64RangeMatch extends SpeakeasyBase {
    /**
     * The end of the range (exclusive) in signed long integer format.
     */
    rangeEnd?: string;
    /**
     * The start of the range (inclusive) in signed long integer format.
     */
    rangeStart?: string;
}
