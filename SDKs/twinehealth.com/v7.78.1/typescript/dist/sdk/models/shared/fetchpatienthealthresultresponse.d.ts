import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionResponseLinks } from "./collectionresponselinks";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { PatientHealthResultResource } from "./patienthealthresultresource";
/**
 * OK
 */
export declare class FetchPatientHealthResultResponse extends SpeakeasyBase {
    data: PatientHealthResultResource[];
    links?: CollectionResponseLinks;
    meta?: FetchMetaResponse;
}
