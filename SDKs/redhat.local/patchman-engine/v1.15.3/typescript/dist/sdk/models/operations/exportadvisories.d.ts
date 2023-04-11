import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportAdvisoriesSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
export declare class ExportAdvisoriesRequest extends SpeakeasyBase {
    /**
     * Filter
     */
    filterAdvisoryType?: string;
    /**
     * Filter
     */
    filterApplicableSystems?: string;
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
     * Find matching text
     */
    search?: string;
}
export declare class ExportAdvisoriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersAdvisoryInlineItems?: shared.ControllersAdvisoryInlineItem[];
}
