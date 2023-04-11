import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOrUpdateMetaResponse } from "./createorupdatemetaresponse";
import { PatientResource } from "./patientresource";
/**
 * Created
 */
export declare class CreatePatientResponse extends SpeakeasyBase {
    data: PatientResource;
    meta?: CreateOrUpdateMetaResponse;
}
