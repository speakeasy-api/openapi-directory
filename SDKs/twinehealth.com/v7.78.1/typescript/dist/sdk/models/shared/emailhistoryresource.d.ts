import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of email. Multiple statuses may be defined. The current status is the one with the most recent date.
 */
export declare class EmailHistoryResourceAttributesStatusTimes extends SpeakeasyBase {
    /**
     * Time email was bounced.
     */
    bounce?: string;
    /**
     * Time email was clicked.
     */
    click?: string;
    /**
     * Time email was deferred.
     */
    deferred?: string;
    /**
     * Time email was delivered.
     */
    delivered?: string;
    /**
     * Time email was dropped.
     */
    dropped?: string;
    /**
     * Time email was opened.
     */
    open?: string;
    /**
     * Time email was processed.
     */
    processed?: string;
    /**
     * Time email was reported as spam.
     */
    spamreport?: string;
    /**
     * Time email was unsubscribed from.
     */
    unsubscribe?: string;
}
export declare class EmailHistoryResourceAttributes extends SpeakeasyBase {
    /**
     * Address email was sent to.
     */
    emailAddress?: string;
    /**
     * Type of email.
     */
    emailType?: string;
    /**
     * Time email was sent.
     */
    sendTime?: string;
    /**
     * Status of email. Multiple statuses may be defined. The current status is the one with the most recent date.
     */
    statusTimes?: EmailHistoryResourceAttributesStatusTimes;
    /**
     * Unique identifier for this email.
     */
    twineEmailId?: string;
}
export declare class EmailHistoryResourceRelationshipsReceiverData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class EmailHistoryResourceRelationshipsReceiver extends SpeakeasyBase {
    data?: EmailHistoryResourceRelationshipsReceiverData;
}
export declare class EmailHistoryResourceRelationshipsSenderData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class EmailHistoryResourceRelationshipsSender extends SpeakeasyBase {
    data?: EmailHistoryResourceRelationshipsSenderData;
}
export declare class EmailHistoryResourceRelationships extends SpeakeasyBase {
    receiver?: EmailHistoryResourceRelationshipsReceiver;
    sender?: EmailHistoryResourceRelationshipsSender;
}
export declare class EmailHistoryResource extends SpeakeasyBase {
    attributes?: EmailHistoryResourceAttributes;
    id?: string;
    relationships?: EmailHistoryResourceRelationships;
    type: string;
}
