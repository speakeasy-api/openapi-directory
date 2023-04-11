import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDeviceTypesListRequest extends SpeakeasyBase {
    consolePorts?: string;
    consoleServerPorts?: string;
    created?: string;
    createdGte?: string;
    createdLte?: string;
    deviceBays?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    interfaces?: string;
    isFullDepth?: string;
    lastUpdated?: string;
    lastUpdatedGte?: string;
    lastUpdatedLte?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    manufacturer?: string;
    manufacturerN?: string;
    manufacturerId?: string;
    manufacturerIdN?: string;
    model?: string;
    modelIc?: string;
    modelIe?: string;
    modelIew?: string;
    modelIsw?: string;
    modelN?: string;
    modelNic?: string;
    modelNie?: string;
    modelNiew?: string;
    modelNisw?: string;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    partNumber?: string;
    partNumberIc?: string;
    partNumberIe?: string;
    partNumberIew?: string;
    partNumberIsw?: string;
    partNumberN?: string;
    partNumberNic?: string;
    partNumberNie?: string;
    partNumberNiew?: string;
    partNumberNisw?: string;
    passThroughPorts?: string;
    powerOutlets?: string;
    powerPorts?: string;
    q?: string;
    slug?: string;
    slugIc?: string;
    slugIe?: string;
    slugIew?: string;
    slugIsw?: string;
    slugN?: string;
    slugNic?: string;
    slugNie?: string;
    slugNiew?: string;
    slugNisw?: string;
    subdeviceRole?: string;
    subdeviceRoleN?: string;
    tag?: string;
    tagN?: string;
    uHeight?: string;
    uHeightGt?: string;
    uHeightGte?: string;
    uHeightLt?: string;
    uHeightLte?: string;
    uHeightN?: string;
}
export declare class DcimDeviceTypesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.DeviceType[];
}
export declare class DcimDeviceTypesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    dcimDeviceTypesList200ApplicationJSONObject?: DcimDeviceTypesList200ApplicationJSON;
}
