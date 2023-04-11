import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOrUpdateMetaResponse } from "./createorupdatemetaresponse";
import { PatientResource } from "./patientresource";
/**
 * OK
 */
export declare class UpdatePatientResponse extends SpeakeasyBase {
    data: PatientResource;
    meta?: CreateOrUpdateMetaResponse;
}
