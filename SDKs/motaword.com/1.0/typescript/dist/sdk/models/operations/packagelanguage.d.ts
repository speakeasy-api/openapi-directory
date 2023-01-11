import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageLanguagePathParams extends SpeakeasyBase {
    id: number;
    language: string;
}
export declare class PackageLanguageQueryParams extends SpeakeasyBase {
    async?: number;
}
export declare class PackageLanguageRequest extends SpeakeasyBase {
    pathParams: PackageLanguagePathParams;
    queryParams: PackageLanguageQueryParams;
}
export declare class PackageLanguageResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    package?: shared.Package;
    statusCode: number;
    packageLanguage200ApplicationOctetStreamBinaryString?: Uint8Array;
}
