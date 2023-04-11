import { SpeakeasyBase } from "../../../internal/utils";
import { PatientCareContextLink } from "./patientcarecontextlink";
export declare class PatientCareContextLinkRequest extends SpeakeasyBase {
    link: PatientCareContextLink;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
