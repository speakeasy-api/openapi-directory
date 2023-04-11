import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionResponseLinks } from "./collectionresponselinks";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { PatientHealthMetricResource } from "./patienthealthmetricresource";
/**
 * OK
 */
export declare class FetchPatientHealthMetricResponse extends SpeakeasyBase {
    data: PatientHealthMetricResource[];
    links?: CollectionResponseLinks;
    meta?: FetchMetaResponse;
}
