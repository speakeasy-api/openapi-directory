import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOrUpdateMetaResponse } from "./createorupdatemetaresponse";
import { PatientPlanSummaryResource } from "./patientplansummaryresource";
/**
 * OK
 */
export declare class UpdatePatientPlanSummaryResponse extends SpeakeasyBase {
    data: PatientPlanSummaryResource;
    meta?: CreateOrUpdateMetaResponse;
}
