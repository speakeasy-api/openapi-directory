import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackagePathParams extends SpeakeasyBase {
    id: number;
}
export declare class PackageQueryParams extends SpeakeasyBase {
    async?: number;
}
export declare class PackageRequest extends SpeakeasyBase {
    pathParams: PackagePathParams;
    queryParams: PackageQueryParams;
}
export declare class PackageResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    package200ApplicationOctetStreamBinaryString?: Uint8Array;
}
