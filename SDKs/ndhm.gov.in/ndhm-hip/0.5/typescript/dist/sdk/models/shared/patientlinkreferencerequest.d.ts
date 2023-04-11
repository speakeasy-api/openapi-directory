import { SpeakeasyBase } from "../../../internal/utils";
import { CareContext } from "./carecontext";
export declare class PatientLinkReferenceRequestPatient extends SpeakeasyBase {
    careContexts: CareContext[];
    id: string;
    referenceNumber: string;
}
export declare class PatientLinkReferenceRequest extends SpeakeasyBase {
    patient: PatientLinkReferenceRequestPatient;
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
    transactionId: string;
}
