import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageProjectTranslationMemoryForLanguageStatusPathParams extends SpeakeasyBase {
    languageCode: string;
    projectId: number;
}
export declare class PackageProjectTranslationMemoryForLanguageStatusQueryParams extends SpeakeasyBase {
    asyncRequestKey: string;
}
export declare class PackageProjectTranslationMemoryForLanguageStatusRequest extends SpeakeasyBase {
    pathParams: PackageProjectTranslationMemoryForLanguageStatusPathParams;
    queryParams: PackageProjectTranslationMemoryForLanguageStatusQueryParams;
}
export declare class PackageProjectTranslationMemoryForLanguageStatusResponse extends SpeakeasyBase {
    asyncOperationStatus?: shared.AsyncOperationStatus;
    contentType: string;
    statusCode: number;
}
