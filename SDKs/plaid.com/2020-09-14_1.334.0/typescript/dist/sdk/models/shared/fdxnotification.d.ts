import { SpeakeasyBase } from "../../../internal/utils";
import { FDXHateoasLink } from "./fdxhateoaslink";
import { FDXNotificationCategoryEnum } from "./fdxnotificationcategoryenum";
import { FDXNotificationPayload } from "./fdxnotificationpayload";
import { FDXNotificationPriorityEnum } from "./fdxnotificationpriorityenum";
import { FDXNotificationSeverityEnum } from "./fdxnotificationseverityenum";
import { FDXNotificationTypeEnum } from "./fdxnotificationtypeenum";
import { FDXParty } from "./fdxparty";
/**
 * Provides the base fields of a notification. Clients will read the `type` property to determine the expected notification payload
 */
export declare class FDXNotification extends SpeakeasyBase {
    /**
     * Category of Notification
     */
    category: FDXNotificationCategoryEnum;
    /**
     * Id of notification
     */
    notificationId: string;
    /**
     * Custom key-value pairs payload for a notification
     */
    notificationPayload: FDXNotificationPayload;
    /**
     * Priority of notification
     */
    priority?: FDXNotificationPriorityEnum;
    /**
     * FDX Participant - an entity or person that is a part of a FDX API transaction
     */
    publisher: FDXParty;
    /**
     * ISO 8601 date-time in format 'YYYY-MM-DDThh:mm:ss.nnn[Z|[+|-]hh:mm]' according to [IETF RFC3339](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)
     */
    sentOn: Date;
    /**
     * Severity level of notification
     */
    severity?: FDXNotificationSeverityEnum;
    /**
     * FDX Participant - an entity or person that is a part of a FDX API transaction
     */
    subscriber?: FDXParty;
    /**
     * Type of Notification
     */
    type: FDXNotificationTypeEnum;
    /**
     * REST application constraint (Hypermedia As The Engine Of Application State)
     */
    url?: FDXHateoasLink;
}
