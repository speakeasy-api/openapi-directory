import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimConsolePortTemplatesListRequest extends SpeakeasyBase {
    devicetypeId?: string;
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
export declare class DcimConsolePortTemplatesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ConsolePortTemplate[];
}
export declare class DcimConsolePortTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimConsolePortTemplatesList200ApplicationJSONObject?: DcimConsolePortTemplatesList200ApplicationJSON;
}
