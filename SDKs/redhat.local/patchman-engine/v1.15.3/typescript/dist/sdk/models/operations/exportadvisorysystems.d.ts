import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportAdvisorySystemsSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
export declare class ExportAdvisorySystemsRequest extends SpeakeasyBase {
    /**
     * Advisory ID
     */
    advisoryId: string;
    /**
     * Filter
     */
    filterDisplayName?: string;
    /**
     * Filter
     */
    filterId?: string;
    /**
     * Filter
     */
    filterLastEvaluation?: string;
    /**
     * Filter
     */
    filterLastUpload?: string;
    /**
     * Filter
     */
    filterOtherCount?: string;
    /**
     * Filter
     */
    filterPackagesInstalled?: string;
    /**
     * Filter
     */
    filterPackagesUpdatable?: string;
    /**
     * Filter
     */
    filterRhbaCount?: string;
    /**
     * Filter
     */
    filterRheaCount?: string;
    /**
     * Filter
     */
    filterRhsaCount?: string;
    /**
     * Filter
     */
    filterStale?: string;
    /**
     * Filter systems by their SAP SIDs
     */
    filterSystemProfileSapSidsIn?: string[];
    /**
     * Filter only SAP systems
     */
    filterSystemProfileSapSystem?: string;
    /**
     * Find matching text
     */
    search?: string;
    /**
     * Tag filter
     */
    tags?: string[];
}
export declare class ExportAdvisorySystemsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersSystemInlineItems?: shared.ControllersSystemInlineItem[];
}
