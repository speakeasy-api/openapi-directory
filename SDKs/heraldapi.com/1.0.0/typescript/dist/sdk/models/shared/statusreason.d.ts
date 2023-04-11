import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This will be returned when the status is declined, referred, or unsupported. When the source is "Carrier" the status reason is from the integrated carrier. When the source is "API", the reason has been cleaned by Herald.
 */
export declare class StatusReason extends SpeakeasyBase {
    reason?: string;
    source?: string;
}
