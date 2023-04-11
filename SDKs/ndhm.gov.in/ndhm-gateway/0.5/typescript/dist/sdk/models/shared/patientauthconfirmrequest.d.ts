import { SpeakeasyBase } from "../../../internal/utils";
import { PatientDemographic } from "./patientdemographic";
/**
 * note, demographic details are only required for demographic auth at this point.
 */
export declare class PatientAuthConfirmRequestCredential extends SpeakeasyBase {
    authCode?: string;
    /**
     * Demographic details are only required for demographic auth at this point. Demographic details must be same as registered
     */
    demographic?: PatientDemographic;
}
export declare class PatientAuthConfirmRequest extends SpeakeasyBase {
    /**
     * note, demographic details are only required for demographic auth at this point.
     */
    credential: PatientAuthConfirmRequestCredential;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
    transactionId: string;
}
