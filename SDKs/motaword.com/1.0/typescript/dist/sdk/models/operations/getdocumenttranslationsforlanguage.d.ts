import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDocumentTranslationsForLanguagePathParams extends SpeakeasyBase {
    documentId: number;
    language: string;
    projectId: number;
}
export declare class GetDocumentTranslationsForLanguageRequest extends SpeakeasyBase {
    pathParams: GetDocumentTranslationsForLanguagePathParams;
}
export declare class GetDocumentTranslationsForLanguageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    stringList?: shared.StringList;
}
