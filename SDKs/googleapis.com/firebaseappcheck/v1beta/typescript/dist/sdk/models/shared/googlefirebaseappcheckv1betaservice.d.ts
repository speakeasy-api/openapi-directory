import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The App Check enforcement mode for this service.
 */
export declare enum GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum {
    Off = "OFF",
    Unenforced = "UNENFORCED",
    Enforced = "ENFORCED"
}
/**
 * The enforcement configuration for a Firebase service supported by App Check.
 */
export declare class GoogleFirebaseAppcheckV1betaService extends SpeakeasyBase {
    /**
     * Required. The App Check enforcement mode for this service.
     */
    enforcementMode?: GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum;
    /**
     * Required. The relative resource name of the service configuration object, in the format: ``` projects/{project_number}/services/{service_id} ``` Note that the `service_id` element must be a supported service ID. Currently, the following service IDs are supported: * `firebasestorage.googleapis.com` (Cloud Storage for Firebase) * `firebasedatabase.googleapis.com` (Firebase Realtime Database) * `firestore.googleapis.com` (Cloud Firestore)
     */
    name?: string;
}
