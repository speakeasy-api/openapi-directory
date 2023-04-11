import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerFeedsListRequest extends SpeakeasyBase {
    amperage?: string;
    amperageGt?: string;
    amperageGte?: string;
    amperageLt?: string;
    amperageLte?: string;
    amperageN?: string;
    created?: string;
    createdGte?: string;
    createdLte?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    lastUpdated?: string;
    lastUpdatedGte?: string;
    lastUpdatedLte?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    maxUtilization?: string;
    maxUtilizationGt?: string;
    maxUtilizationGte?: string;
    maxUtilizationLt?: string;
    maxUtilizationLte?: string;
    maxUtilizationN?: string;
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
    phase?: string;
    phaseN?: string;
    powerPanelId?: string;
    powerPanelIdN?: string;
    q?: string;
    rackId?: string;
    rackIdN?: string;
    region?: string;
    regionN?: string;
    regionId?: string;
    regionIdN?: string;
    site?: string;
    siteN?: string;
    siteId?: string;
    siteIdN?: string;
    status?: string;
    statusN?: string;
    supply?: string;
    supplyN?: string;
    tag?: string;
    tagN?: string;
    type?: string;
    typeN?: string;
    voltage?: string;
    voltageGt?: string;
    voltageGte?: string;
    voltageLt?: string;
    voltageLte?: string;
    voltageN?: string;
}
export declare class DcimPowerFeedsList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.PowerFeed[];
}
export declare class DcimPowerFeedsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimPowerFeedsList200ApplicationJSONObject?: DcimPowerFeedsList200ApplicationJSON;
}
