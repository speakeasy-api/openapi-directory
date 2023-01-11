import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Ipam {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    ipamChoicesList(config?: AxiosRequestConfig): Promise<operations.IpamChoicesListResponse>;
    ipamChoicesRead(req: operations.IpamChoicesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamChoicesReadResponse>;
    ipamAggregatesCreate(req: operations.IpamAggregatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesCreateResponse>;
    ipamAggregatesDelete(req: operations.IpamAggregatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesDeleteResponse>;
    ipamAggregatesList(req: operations.IpamAggregatesListRequest, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesListResponse>;
    ipamAggregatesPartialUpdate(req: operations.IpamAggregatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesPartialUpdateResponse>;
    ipamAggregatesRead(req: operations.IpamAggregatesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesReadResponse>;
    ipamAggregatesUpdate(req: operations.IpamAggregatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesUpdateResponse>;
    ipamIpAddressesCreate(req: operations.IpamIpAddressesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesCreateResponse>;
    ipamIpAddressesDelete(req: operations.IpamIpAddressesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesDeleteResponse>;
    ipamIpAddressesList(req: operations.IpamIpAddressesListRequest, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesListResponse>;
    ipamIpAddressesPartialUpdate(req: operations.IpamIpAddressesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesPartialUpdateResponse>;
    ipamIpAddressesRead(req: operations.IpamIpAddressesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesReadResponse>;
    ipamIpAddressesUpdate(req: operations.IpamIpAddressesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesUpdateResponse>;
    /**
     * ipamPrefixesAvailableIpsCreate - A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
     * returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
     * however results will not be paginated.
    **/
    ipamPrefixesAvailableIpsCreate(req: operations.IpamPrefixesAvailableIpsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesAvailableIpsCreateResponse>;
    /**
     * ipamPrefixesAvailableIpsRead - A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
     * returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
     * however results will not be paginated.
    **/
    ipamPrefixesAvailableIpsRead(req: operations.IpamPrefixesAvailableIpsReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesAvailableIpsReadResponse>;
    /**
     * ipamPrefixesAvailablePrefixesCreate - A convenience method for returning available child prefixes within a parent.
    **/
    ipamPrefixesAvailablePrefixesCreate(req: operations.IpamPrefixesAvailablePrefixesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesAvailablePrefixesCreateResponse>;
    /**
     * ipamPrefixesAvailablePrefixesRead - A convenience method for returning available child prefixes within a parent.
    **/
    ipamPrefixesAvailablePrefixesRead(req: operations.IpamPrefixesAvailablePrefixesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesAvailablePrefixesReadResponse>;
    ipamPrefixesCreate(req: operations.IpamPrefixesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesCreateResponse>;
    ipamPrefixesDelete(req: operations.IpamPrefixesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesDeleteResponse>;
    ipamPrefixesList(req: operations.IpamPrefixesListRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesListResponse>;
    ipamPrefixesPartialUpdate(req: operations.IpamPrefixesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesPartialUpdateResponse>;
    ipamPrefixesRead(req: operations.IpamPrefixesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesReadResponse>;
    ipamPrefixesUpdate(req: operations.IpamPrefixesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesUpdateResponse>;
    ipamRirsCreate(req: operations.IpamRirsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamRirsCreateResponse>;
    ipamRirsDelete(req: operations.IpamRirsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamRirsDeleteResponse>;
    ipamRirsList(req: operations.IpamRirsListRequest, config?: AxiosRequestConfig): Promise<operations.IpamRirsListResponse>;
    ipamRirsPartialUpdate(req: operations.IpamRirsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamRirsPartialUpdateResponse>;
    ipamRirsRead(req: operations.IpamRirsReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamRirsReadResponse>;
    ipamRirsUpdate(req: operations.IpamRirsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamRirsUpdateResponse>;
    ipamRolesCreate(req: operations.IpamRolesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamRolesCreateResponse>;
    ipamRolesDelete(req: operations.IpamRolesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamRolesDeleteResponse>;
    ipamRolesList(req: operations.IpamRolesListRequest, config?: AxiosRequestConfig): Promise<operations.IpamRolesListResponse>;
    ipamRolesPartialUpdate(req: operations.IpamRolesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamRolesPartialUpdateResponse>;
    ipamRolesRead(req: operations.IpamRolesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamRolesReadResponse>;
    ipamRolesUpdate(req: operations.IpamRolesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamRolesUpdateResponse>;
    ipamServicesCreate(req: operations.IpamServicesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamServicesCreateResponse>;
    ipamServicesDelete(req: operations.IpamServicesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamServicesDeleteResponse>;
    ipamServicesList(req: operations.IpamServicesListRequest, config?: AxiosRequestConfig): Promise<operations.IpamServicesListResponse>;
    ipamServicesPartialUpdate(req: operations.IpamServicesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamServicesPartialUpdateResponse>;
    ipamServicesRead(req: operations.IpamServicesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamServicesReadResponse>;
    ipamServicesUpdate(req: operations.IpamServicesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamServicesUpdateResponse>;
    ipamVlanGroupsCreate(req: operations.IpamVlanGroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsCreateResponse>;
    ipamVlanGroupsDelete(req: operations.IpamVlanGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsDeleteResponse>;
    ipamVlanGroupsList(req: operations.IpamVlanGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsListResponse>;
    ipamVlanGroupsPartialUpdate(req: operations.IpamVlanGroupsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsPartialUpdateResponse>;
    ipamVlanGroupsRead(req: operations.IpamVlanGroupsReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsReadResponse>;
    ipamVlanGroupsUpdate(req: operations.IpamVlanGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsUpdateResponse>;
    ipamVlansCreate(req: operations.IpamVlansCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlansCreateResponse>;
    ipamVlansDelete(req: operations.IpamVlansDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlansDeleteResponse>;
    ipamVlansList(req: operations.IpamVlansListRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlansListResponse>;
    ipamVlansPartialUpdate(req: operations.IpamVlansPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlansPartialUpdateResponse>;
    ipamVlansRead(req: operations.IpamVlansReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlansReadResponse>;
    ipamVlansUpdate(req: operations.IpamVlansUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlansUpdateResponse>;
    ipamVrfsCreate(req: operations.IpamVrfsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVrfsCreateResponse>;
    ipamVrfsDelete(req: operations.IpamVrfsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamVrfsDeleteResponse>;
    ipamVrfsList(req: operations.IpamVrfsListRequest, config?: AxiosRequestConfig): Promise<operations.IpamVrfsListResponse>;
    ipamVrfsPartialUpdate(req: operations.IpamVrfsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVrfsPartialUpdateResponse>;
    ipamVrfsRead(req: operations.IpamVrfsReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamVrfsReadResponse>;
    ipamVrfsUpdate(req: operations.IpamVrfsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVrfsUpdateResponse>;
}
