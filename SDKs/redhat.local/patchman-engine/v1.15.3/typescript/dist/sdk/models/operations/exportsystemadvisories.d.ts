import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportSystemAdvisoriesSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
export declare class ExportSystemAdvisoriesRequest extends SpeakeasyBase {
    /**
     * Filter
     */
    filterAdvisoryType?: string;
    /**
     * Filter
     */
    filterDescription?: string;
    /**
     * Filter
     */
    filterId?: string;
    /**
     * Filter
     */
    filterPublicDate?: string;
    /**
     * Filter
     */
    filterSeverity?: string;
    /**
     * Filter
     */
    filterSynopsis?: string;
    /**
     * Inventory ID
     */
    inventoryId: string;
    /**
     * Find matching text
     */
    search?: string;
}
export declare class ExportSystemAdvisoriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersSystemAdvisoriesDBLookups?: shared.ControllersSystemAdvisoriesDBLookup[];
}
