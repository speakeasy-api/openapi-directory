import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageUserTranslationMemoryForLanguageStatusPathParams extends SpeakeasyBase {
    languageCode: string;
}
export declare class PackageUserTranslationMemoryForLanguageStatusQueryParams extends SpeakeasyBase {
    asyncRequestKey: string;
}
export declare class PackageUserTranslationMemoryForLanguageStatusRequest extends SpeakeasyBase {
    pathParams: PackageUserTranslationMemoryForLanguageStatusPathParams;
    queryParams: PackageUserTranslationMemoryForLanguageStatusQueryParams;
}
export declare class PackageUserTranslationMemoryForLanguageStatusResponse extends SpeakeasyBase {
    asyncOperationStatus?: shared.AsyncOperationStatus;
    contentType: string;
    statusCode: number;
}
