import { SpeakeasyBase } from "../../../internal/utils";
import { CareContextRepresentation } from "./carecontextrepresentation";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare class PatientLinkResultPatient extends SpeakeasyBase {
    careContexts: CareContextRepresentation[];
    display: string;
    referenceNumber: string;
}
export declare class PatientLinkResult extends SpeakeasyBase {
    error?: ErrorT;
    patient?: PatientLinkResultPatient;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    resp: RequestReference;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
