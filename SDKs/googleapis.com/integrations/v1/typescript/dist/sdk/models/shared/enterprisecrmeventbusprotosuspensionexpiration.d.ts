import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseCrmEventbusProtoSuspensionExpiration extends SpeakeasyBase {
    /**
     * Milliseconds after which the suspension expires, if no action taken.
     */
    expireAfterMs?: number;
    /**
     * Whether the suspension will be REJECTED or LIFTED upon expiration. REJECTED is the default behavior.
     */
    liftWhenExpired?: boolean;
    /**
     * Milliseconds after which the previous suspension action reminder, if any, is sent using the selected notification option, for a suspension which is still PENDING_UNSPECIFIED.
     */
    remindAfterMs?: number;
}
