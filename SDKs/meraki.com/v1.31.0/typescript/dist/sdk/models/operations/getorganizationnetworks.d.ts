import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected.
 */
export declare enum GetOrganizationNetworksTagsFilterTypeEnum {
    WithAllTags = "withAllTags",
    WithAnyTags = "withAnyTags"
}
export declare class GetOrganizationNetworksRequest extends SpeakeasyBase {
    /**
     * An optional parameter that is the ID of a config template. Will return all networks bound to that template.
     */
    configTemplateId?: string;
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * An optional parameter to filter config template bound networks. If configTemplateId is set, this cannot be false.
     */
    isBoundToConfigTemplate?: boolean;
    organizationId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000.
     */
    perPage?: number;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
    /**
     * An optional parameter to filter networks by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below).
     */
    tags?: string[];
    /**
     * An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected.
     */
    tagsFilterType?: GetOrganizationNetworksTagsFilterTypeEnum;
}
export declare class GetOrganizationNetworks200ApplicationJSON extends SpeakeasyBase {
    /**
     * Enrollment string for the network
     */
    enrollmentString?: string;
    /**
     * Network ID
     */
    id?: string;
    /**
     * If the network is bound to a config template
     */
    isBoundToConfigTemplate?: boolean;
    /**
     * Network name
     */
    name?: string;
    /**
     * Notes for the network
     */
    notes?: string;
    /**
     * Organization ID
     */
    organizationId?: string;
    /**
     * List of the product types that the network supports
     */
    productTypes?: string[];
    /**
     * Network tags
     */
    tags?: string[];
    /**
     * Timezone of the network
     */
    timeZone?: string;
    /**
     * URL to the network Dashboard UI
     */
    url?: string;
}
export declare class GetOrganizationNetworksResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationNetworks200ApplicationJSONObjects?: GetOrganizationNetworks200ApplicationJSON[];
}
