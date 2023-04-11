import { SpeakeasyBase } from "../../../internal/utils";
import { EventTypesEnum } from "./eventtypesenum";
export declare class AuditEventType extends SpeakeasyBase {
    /**
     * A description of the event type
     */
    description?: string;
    /**
     * The type of the audit event.
     */
    type?: EventTypesEnum;
}
