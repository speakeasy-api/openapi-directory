import { SpeakeasyBase } from "../../../internal/utils";
import { EventLink } from "./eventlink";
import { EventTypesEnum } from "./eventtypesenum";
/**
 * The source of the event.
 *
 * @remarks
 * CD: Customer Dashboard DEVAPI: via Developer API
 *
 */
export declare enum AuditEventSourceEnum {
    Cd = "CD",
    Devapi = "DEVAPI"
}
/**
 * Description of the audit event source.
 */
export declare enum AuditEventSourceDescriptionEnum {
    CustomerDashboard = "Customer Dashboard",
    DeveloperAPI = "Developer API"
}
/**
 * OK
 */
export declare class AuditEvent extends SpeakeasyBase {
    /**
     * A link to this audit event object if you were to retrieve it individually.
     */
    links?: EventLink;
    /**
     * The NEXMO_API_KEY of the Vonage API account that the audit event is associated with.
     */
    accountId?: string;
    /**
     * A valid JSON object with information detailing the context of the audit event.
     */
    context?: any;
    /**
     * When the audit event was created.
     */
    createdAt?: Date;
    /**
     * The type of the audit event.
     */
    eventType?: EventTypesEnum;
    /**
     * A description of the event type
     */
    eventTypeDescription?: string;
    /**
     * UUID of the audit event
     */
    id?: string;
    /**
     * The source of the event.
     *
     * @remarks
     * CD: Customer Dashboard DEVAPI: via Developer API
     *
     */
    source?: AuditEventSourceEnum;
    /**
     * ISO 3166-1 Alpha-2 country code recorded for the event.
     */
    sourceCountry?: string;
    /**
     * Description of the audit event source.
     */
    sourceDescription?: AuditEventSourceDescriptionEnum;
    /**
     * The IP address used to make the account change.
     */
    sourceIp?: string;
    /**
     * Email of the user whose account the audit event is associated with.
     */
    userEmail?: string;
    /**
     * The ID of the user that the audit event is associated with.
     */
    userId?: number;
}
