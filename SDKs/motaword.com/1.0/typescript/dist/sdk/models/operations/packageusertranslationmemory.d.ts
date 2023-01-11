import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageUserTranslationMemoryPathParams extends SpeakeasyBase {
    languageCode: string;
}
export declare class PackageUserTranslationMemoryQueryParams extends SpeakeasyBase {
    async?: number;
    email?: number;
}
export declare class PackageUserTranslationMemoryRequest extends SpeakeasyBase {
    pathParams: PackageUserTranslationMemoryPathParams;
    queryParams: PackageUserTranslationMemoryQueryParams;
}
export declare class PackageUserTranslationMemoryResponse extends SpeakeasyBase {
    asyncOperationStatus?: shared.AsyncOperationStatus;
    contentType: string;
    statusCode: number;
    packageUserTranslationMemory200ApplicationXMLBinaryString?: Uint8Array;
}
