import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimInterfaceTemplatesListRequest extends SpeakeasyBase {
    devicetypeId?: string;
    formFactor?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    mgmtOnly?: string;
    name?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
}
export declare class DcimInterfaceTemplatesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.InterfaceTemplate[];
}
export declare class DcimInterfaceTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimInterfaceTemplatesList200ApplicationJSONObject?: DcimInterfaceTemplatesList200ApplicationJSON;
}
