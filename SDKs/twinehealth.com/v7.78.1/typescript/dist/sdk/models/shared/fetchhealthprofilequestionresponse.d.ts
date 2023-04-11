import { SpeakeasyBase } from "../../../internal/utils";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { HealthProfileQuestionResource } from "./healthprofilequestionresource";
import { Resource } from "./resource";
/**
 * OK
 */
export declare class FetchHealthProfileQuestionResponse extends SpeakeasyBase {
    data: HealthProfileQuestionResource;
    /**
     * Related resources which are included in the response based on the `include` param.
     *
     * @remarks
     * Attributes of each resource will vary depending on the type.
     * See [question_definition](#operation/fetchHealthQuestionDefinition), [answer](#operation/fetchHealthProfileAnswer)
     *
     */
    included?: Resource[];
    meta?: FetchMetaResponse;
}
