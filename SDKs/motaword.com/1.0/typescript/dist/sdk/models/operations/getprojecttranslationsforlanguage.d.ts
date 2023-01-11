import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectTranslationsForLanguagePathParams extends SpeakeasyBase {
    language: string;
    projectId: number;
}
export declare class GetProjectTranslationsForLanguageRequest extends SpeakeasyBase {
    pathParams: GetProjectTranslationsForLanguagePathParams;
}
export declare class GetProjectTranslationsForLanguageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    stringList?: shared.StringList;
}
