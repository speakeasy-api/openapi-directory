import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PackageSystemsSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
export declare class PackageSystemsRequest extends SpeakeasyBase {
    /**
     * Filter systems by their SAP SIDs
     */
    filterSystemProfileSapSidsIn?: string[];
    /**
     * Filter only SAP systems
     */
    filterSystemProfileSapSystem?: string;
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
    /**
     * Tag filter
     */
    tags?: string[];
}
export declare class PackageSystemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersPackageSystemsResponse?: shared.ControllersPackageSystemsResponse;
}
