import { SpeakeasyBase } from "../../../internal/utils";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { HealthProfileAnswerResource } from "./healthprofileanswerresource";
import { Resource } from "./resource";
/**
 * OK
 */
export declare class FetchHealthProfileAnswerResponse extends SpeakeasyBase {
    data: HealthProfileAnswerResource;
    /**
     * Related resources which are included in the response based on the `include` param.
     *
     * @remarks
     * Attributes of each resource will vary depending on the type.
     * See [patient](#operation/fetchPatient)
     *
     */
    included?: Resource[];
    meta?: FetchMetaResponse;
}
