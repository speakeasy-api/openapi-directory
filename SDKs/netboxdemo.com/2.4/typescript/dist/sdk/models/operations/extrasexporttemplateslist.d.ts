import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasExportTemplatesListRequest extends SpeakeasyBase {
    contentType?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    name?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
}
export declare class ExtrasExportTemplatesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ExportTemplate[];
}
export declare class ExtrasExportTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    extrasExportTemplatesList200ApplicationJSONObject?: ExtrasExportTemplatesList200ApplicationJSON;
}
