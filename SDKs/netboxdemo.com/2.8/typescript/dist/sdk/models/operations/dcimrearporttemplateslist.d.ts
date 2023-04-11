import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimRearPortTemplatesListRequest extends SpeakeasyBase {
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
    positions?: string;
    positionsGt?: string;
    positionsGte?: string;
    positionsLt?: string;
    positionsLte?: string;
    positionsN?: string;
    q?: string;
    type?: string;
    typeN?: string;
}
export declare class DcimRearPortTemplatesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.RearPortTemplate[];
}
export declare class DcimRearPortTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimRearPortTemplatesList200ApplicationJSONObject?: DcimRearPortTemplatesList200ApplicationJSON;
}
