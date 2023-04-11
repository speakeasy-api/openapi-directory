import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionResponseLinks } from "./collectionresponselinks";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { HealthProfileAnswerResource } from "./healthprofileanswerresource";
import { Resource } from "./resource";
/**
 * OK
 */
export declare class FetchHealthProfileAnswersResponse extends SpeakeasyBase {
    data: HealthProfileAnswerResource[];
    /**
     * Related resources which are included in the response based on the `include` param.
     *
     * @remarks
     * Attributes of each resource will vary depending on the type.
     * See [patient](#operation/fetchPatient)
     *
     */
    included?: Resource[];
    links?: CollectionResponseLinks;
    meta?: FetchMetaResponse;
}
