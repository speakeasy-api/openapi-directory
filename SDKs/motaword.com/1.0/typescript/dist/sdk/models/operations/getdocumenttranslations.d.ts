import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDocumentTranslationsPathParams extends SpeakeasyBase {
    documentId: number;
    projectId: number;
}
export declare class GetDocumentTranslationsRequest extends SpeakeasyBase {
    pathParams: GetDocumentTranslationsPathParams;
}
export declare class GetDocumentTranslationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    stringList?: shared.StringList;
}
