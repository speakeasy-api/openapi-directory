import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDeviceBayTemplatesListRequest extends SpeakeasyBase {
    devicetypeId?: string;
    devicetypeIdN?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    name?: string;
    nameIc?: string;
    nameIe?: string;
    nameIew?: string;
    nameIsw?: string;
    nameN?: string;
    nameNic?: string;
    nameNie?: string;
    nameNiew?: string;
    nameNisw?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    q?: string;
}
export declare class DcimDeviceBayTemplatesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.DeviceBayTemplate[];
}
export declare class DcimDeviceBayTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimDeviceBayTemplatesList200ApplicationJSONObject?: DcimDeviceBayTemplatesList200ApplicationJSON;
}
