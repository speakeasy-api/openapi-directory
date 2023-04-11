import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentManagerPatientID } from "./consentmanagerpatientid";
import { ConsentStatusEnum } from "./consentstatusenum";
import { HITypeEnumEnum } from "./hitypeenumenum";
import { Permission } from "./permission";
import { UsePurpose } from "./usepurpose";
export declare class HIPConsentNotificationNotificationConsentDetailCareContexts extends SpeakeasyBase {
    careContextReference: string;
    patientReference: string;
}
export declare class HIPConsentNotificationNotificationConsentDetailConsentManager extends SpeakeasyBase {
    id: string;
}
export declare class HIPConsentNotificationNotificationConsentDetailHIP extends SpeakeasyBase {
    id: string;
}
export declare class HIPConsentNotificationNotificationConsentDetail extends SpeakeasyBase {
    careContexts: HIPConsentNotificationNotificationConsentDetailCareContexts[];
    consentId: string;
    consentManager: HIPConsentNotificationNotificationConsentDetailConsentManager;
    createdAt: Date;
    hiTypes: HITypeEnumEnum[];
    hip: HIPConsentNotificationNotificationConsentDetailHIP;
    patient: ConsentManagerPatientID;
    permission: Permission;
    purpose: UsePurpose;
    schemaVersion?: string;
}
export declare class HIPConsentNotificationNotification extends SpeakeasyBase {
    consentDetail: HIPConsentNotificationNotificationConsentDetail;
    consentId: string;
    signature: string;
    status: ConsentStatusEnum;
}
export declare class HIPConsentNotification extends SpeakeasyBase {
    notification: HIPConsentNotificationNotification;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
