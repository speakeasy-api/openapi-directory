import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerOutletTemplatesListRequest extends SpeakeasyBase {
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
export declare class DcimPowerOutletTemplatesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.PowerOutletTemplate[];
}
export declare class DcimPowerOutletTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimPowerOutletTemplatesList200ApplicationJSONObject?: DcimPowerOutletTemplatesList200ApplicationJSON;
}
