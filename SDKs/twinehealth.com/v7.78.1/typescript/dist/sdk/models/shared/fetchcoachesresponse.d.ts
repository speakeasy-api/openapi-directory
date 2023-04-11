import { SpeakeasyBase } from "../../../internal/utils";
import { CoachResource } from "./coachresource";
import { FetchMetaResponse } from "./fetchmetaresponse";
/**
 * OK
 */
export declare class FetchCoachesResponse extends SpeakeasyBase {
    data: CoachResource[];
    meta?: FetchMetaResponse;
}
