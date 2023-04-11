import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimConsoleServerPortTemplatesListRequest extends SpeakeasyBase {
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
export declare class DcimConsoleServerPortTemplatesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ConsoleServerPortTemplate[];
}
export declare class DcimConsoleServerPortTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimConsoleServerPortTemplatesList200ApplicationJSONObject?: DcimConsoleServerPortTemplatesList200ApplicationJSON;
}
