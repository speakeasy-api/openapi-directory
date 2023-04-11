import { SpeakeasyBase } from "../../../internal/utils";
import { EventObjectTypeEnum } from "./eventobjecttypeenum";
import { EventTypeEnum } from "./eventtypeenum";
import { Webhook } from "./webhook";
/**
 * A Probely event
 */
export declare class Event extends SpeakeasyBase {
    /**
     * Event object.
     */
    content?: any;
    /**
     * Event type:
     *
     * @remarks
     * - `user_created` new user added to account
     * - `user_deleted` user deleted from account
     * - `target_created` new target added to account
     * - `target_deleted` target deleted from account
     * - `target_verified` target ownership verified
     * - `target_verification_failed` target ownership verification failed
     * - `scan_started` scan started on target
     * - `scan_canceled` scan on target canceled
     * - `scan_completed` scan finished with successfuly
     * - `scan_failed` scan finished unsuccessfuly
     * - `finding_detected` new finding detected (not found before)
     * - `finding_fixed` finding was fixed
     *
     */
    eventType?: EventTypeEnum;
    /**
     * Object id.
     */
    id?: string;
    /**
     * Type of object in the event content.
     *
     * @remarks
     *
     */
    objectType?: EventObjectTypeEnum;
    /**
     * Date time of when the event occurred
     */
    ocurredAt?: Date;
    webhooks?: Webhook[];
}
