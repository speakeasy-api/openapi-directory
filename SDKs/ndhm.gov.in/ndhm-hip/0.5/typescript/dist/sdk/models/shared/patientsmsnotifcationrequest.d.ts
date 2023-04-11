import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatientSMSNotifcationRequestNotificationHip extends SpeakeasyBase {
    /**
     * Registered id of the HIP.
     */
    id: string;
    /**
     * Name of the HIP(Hospital). Hospital's name will be fetched from registry if not provided.
     */
    name?: string;
}
export declare class PatientSMSNotifcationRequestNotification extends SpeakeasyBase {
    /**
     * Information about care context or visit for which the SMS is being sent.
     */
    careContextInfo: string;
    /**
     * A link pointing to digital health records of the patient. PHR App's deeplink will be sent in SMS if this field is not provided.
     */
    deeplinkUrl?: string;
    hip: PatientSMSNotifcationRequestNotificationHip;
    /**
     * Phone number of the receiver with country code
     */
    phoneNo: string;
    /**
     * Name of the reciever/patient. Receiver's name will not be sent if not provided.
     */
    receiverName?: string;
}
export declare class PatientSMSNotifcationRequest extends SpeakeasyBase {
    notification: PatientSMSNotifcationRequestNotification;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
