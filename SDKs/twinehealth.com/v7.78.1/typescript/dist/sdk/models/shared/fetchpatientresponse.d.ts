import { SpeakeasyBase } from "../../../internal/utils";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { PatientResource } from "./patientresource";
/**
 * OK
 */
export declare class FetchPatientResponse extends SpeakeasyBase {
    data: PatientResource;
    meta?: FetchMetaResponse;
}
