import { SpeakeasyBase } from "../../../internal/utils";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { HealthProfileResource } from "./healthprofileresource";
import { Resource } from "./resource";
/**
 * OK
 */
export declare class FetchHealthProfileResponse extends SpeakeasyBase {
    data: HealthProfileResource;
    /**
     * Related resources which are included in the response based on the `include` param.
     *
     * @remarks
     * Attributes of each resource will vary depending on the type.
     * See [patient](#operation/fetchPatient), [question](#operation/fetchHealthProfileQuestion)
     *
     */
    included?: Resource[];
    meta?: FetchMetaResponse;
}
