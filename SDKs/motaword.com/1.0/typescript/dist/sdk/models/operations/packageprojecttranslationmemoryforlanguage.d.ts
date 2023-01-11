import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageProjectTranslationMemoryForLanguagePathParams extends SpeakeasyBase {
    languageCode: string;
    projectId: number;
}
export declare class PackageProjectTranslationMemoryForLanguageQueryParams extends SpeakeasyBase {
    async?: number;
    format?: string;
}
export declare class PackageProjectTranslationMemoryForLanguageRequest extends SpeakeasyBase {
    pathParams: PackageProjectTranslationMemoryForLanguagePathParams;
    queryParams: PackageProjectTranslationMemoryForLanguageQueryParams;
}
export declare class PackageProjectTranslationMemoryForLanguageResponse extends SpeakeasyBase {
    asyncOperationStatus?: shared.AsyncOperationStatus;
    contentType: string;
    statusCode: number;
    packageProjectTranslationMemoryForLanguage200ApplicationXMLBinaryString?: Uint8Array;
}
