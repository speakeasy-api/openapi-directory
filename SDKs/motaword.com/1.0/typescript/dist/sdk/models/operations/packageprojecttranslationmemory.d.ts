import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageProjectTranslationMemoryPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class PackageProjectTranslationMemoryQueryParams extends SpeakeasyBase {
    async?: number;
    format?: string;
}
export declare class PackageProjectTranslationMemoryRequest extends SpeakeasyBase {
    pathParams: PackageProjectTranslationMemoryPathParams;
    queryParams: PackageProjectTranslationMemoryQueryParams;
}
export declare class PackageProjectTranslationMemoryResponse extends SpeakeasyBase {
    asyncOperationStatus?: shared.AsyncOperationStatus;
    contentType: string;
    statusCode: number;
    packageProjectTranslationMemory200ApplicationXMLBinaryString?: Uint8Array;
}
