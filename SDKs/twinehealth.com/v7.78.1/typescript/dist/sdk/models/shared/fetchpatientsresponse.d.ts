import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionResponseLinks } from "./collectionresponselinks";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { PatientResource } from "./patientresource";
/**
 * OK
 */
export declare class FetchPatientsResponse extends SpeakeasyBase {
    data: PatientResource[];
    links?: CollectionResponseLinks;
    meta?: FetchMetaResponse;
}
