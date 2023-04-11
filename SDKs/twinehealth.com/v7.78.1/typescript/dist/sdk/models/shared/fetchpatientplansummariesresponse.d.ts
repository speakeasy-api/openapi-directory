import { SpeakeasyBase } from "../../../internal/utils";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { PatientPlanSummaryResource } from "./patientplansummaryresource";
import { Resource } from "./resource";
/**
 * OK
 */
export declare class FetchPatientPlanSummariesResponse extends SpeakeasyBase {
    data: PatientPlanSummaryResource[];
    /**
     * Related resources which are included in the response based on the `include` param.
     *
     * @remarks
     * Attributes of each resource will vary depending on the type.
     * See [action](#operation/fetchAction), [bundle](#operation/fetchBundle) and [patient](#operation/fetchPatient)
     *
     */
    included?: Resource[];
    meta?: FetchMetaResponse;
}
