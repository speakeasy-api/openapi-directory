import { SpeakeasyBase } from "../../../internal/utils";
import { CareContextRepresentation } from "./carecontextrepresentation";
export declare class PatientCareContextLinkPatient extends SpeakeasyBase {
    careContexts: CareContextRepresentation[];
    display: string;
    /**
     * patient reference id at HIP
     */
    referenceNumber: string;
}
export declare class PatientCareContextLink extends SpeakeasyBase {
    /**
     * AccessToken fetched in the user auth process for the purpose specified
     */
    accessToken: string;
    patient: PatientCareContextLinkPatient;
}
