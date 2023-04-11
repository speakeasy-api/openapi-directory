import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentArtefactReference } from "./consentartefactreference";
import { ConsentStatusEnum } from "./consentstatusenum";
export declare class HIUConsentNotificationEventNotification extends SpeakeasyBase {
    /**
     * if the status is GRANTED or REVOKED, then the consentArtefact references (Ids) must be specified.
     */
    consentArtefacts?: ConsentArtefactReference[];
    consentRequestId: string;
    status: ConsentStatusEnum;
}
export declare class HIUConsentNotificationEvent extends SpeakeasyBase {
    notification: HIUConsentNotificationEventNotification;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
