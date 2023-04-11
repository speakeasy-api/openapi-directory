import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerPortTemplatesListRequest extends SpeakeasyBase {
    allocatedDraw?: string;
    allocatedDrawGt?: string;
    allocatedDrawGte?: string;
    allocatedDrawLt?: string;
    allocatedDrawLte?: string;
    allocatedDrawN?: string;
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
    maximumDraw?: string;
    maximumDrawGt?: string;
    maximumDrawGte?: string;
    maximumDrawLt?: string;
    maximumDrawLte?: string;
    maximumDrawN?: string;
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
    type?: string;
    typeN?: string;
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
