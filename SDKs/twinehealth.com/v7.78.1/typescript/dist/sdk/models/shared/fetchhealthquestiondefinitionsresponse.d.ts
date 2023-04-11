import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionResponseLinks } from "./collectionresponselinks";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { HealthQuestionDefinitionResource } from "./healthquestiondefinitionresource";
/**
 * OK
 */
export declare class FetchHealthQuestionDefinitionsResponse extends SpeakeasyBase {
    data: HealthQuestionDefinitionResource[];
    links?: CollectionResponseLinks;
    meta?: FetchMetaResponse;
}
