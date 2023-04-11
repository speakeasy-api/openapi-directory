import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportPackageSystemsSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
export declare class ExportPackageSystemsRequest extends SpeakeasyBase {
    /**
     * Filter systems by their SAP SIDs
     */
    filterSystemProfileSapSidsIn?: string[];
    /**
     * Filter only SAP systems
     */
    filterSystemProfileSapSystem?: string;
    /**
     * Package name
     */
    packageName: string;
    /**
     * Tag filter
     */
    tags?: string[];
}
export declare class ExportPackageSystemsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersPackageSystemItems?: shared.ControllersPackageSystemItem[];
}
