import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOrUpdateMetaResponse } from "./createorupdatemetaresponse";
import { PatientHealthMetricResource } from "./patienthealthmetricresource";
/**
 * OK
 */
export declare class CreatePatientHealthMetricResponse extends SpeakeasyBase {
    data: PatientHealthMetricResource;
    meta?: CreateOrUpdateMetaResponse;
}
