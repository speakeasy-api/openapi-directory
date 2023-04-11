import { SpeakeasyBase } from "../../../internal/utils";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { HealthQuestionDefinitionResource } from "./healthquestiondefinitionresource";
/**
 * OK
 */
export declare class FetchHealthQuestionDefinitionResponse extends SpeakeasyBase {
    data: HealthQuestionDefinitionResource;
    meta?: FetchMetaResponse;
}
