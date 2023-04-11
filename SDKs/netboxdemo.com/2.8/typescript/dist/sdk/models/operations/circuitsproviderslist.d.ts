import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CircuitsProvidersListRequest extends SpeakeasyBase {
    account?: string;
    accountIc?: string;
    accountIe?: string;
    accountIew?: string;
    accountIsw?: string;
    accountN?: string;
    accountNic?: string;
    accountNie?: string;
    accountNiew?: string;
    accountNisw?: string;
    asn?: string;
    asnGt?: string;
    asnGte?: string;
    asnLt?: string;
    asnLte?: string;
    asnN?: string;
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
    region?: string;
    regionN?: string;
    regionId?: string;
    regionIdN?: string;
    site?: string;
    siteN?: string;
    siteId?: string;
    siteIdN?: string;
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
    tag?: string;
    tagN?: string;
}
export declare class CircuitsProvidersList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Provider[];
}
export declare class CircuitsProvidersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    circuitsProvidersList200ApplicationJSONObject?: CircuitsProvidersList200ApplicationJSON;
}
