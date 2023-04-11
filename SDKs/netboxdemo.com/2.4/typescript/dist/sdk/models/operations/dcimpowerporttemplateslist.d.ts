import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerPortTemplatesListRequest extends SpeakeasyBase {
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
export declare class DcimPowerPortTemplatesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.PowerPortTemplate[];
}
export declare class DcimPowerPortTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimPowerPortTemplatesList200ApplicationJSONObject?: DcimPowerPortTemplatesList200ApplicationJSON;
}
