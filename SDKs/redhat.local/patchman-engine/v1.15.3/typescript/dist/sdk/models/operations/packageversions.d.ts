import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PackageVersionsSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
export declare class PackageVersionsRequest extends SpeakeasyBase {
    /**
     * Limit for paging, set -1 to return all
     */
    limit?: number;
    /**
     * Offset for paging
     */
    offset?: number;
    /**
     * Package name
     */
    packageName: string;
}
export declare class PackageVersionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersPackageVersionsResponse?: shared.ControllersPackageVersionsResponse;
}
