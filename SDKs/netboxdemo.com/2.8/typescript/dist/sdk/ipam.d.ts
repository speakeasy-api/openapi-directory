import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Ipam {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    ipamAggregatesCreate(req: shared.WritableAggregateInput, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesCreateResponse>;
    ipamAggregatesDelete(req: operations.IpamAggregatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamAggregatesList(req: operations.IpamAggregatesListRequest, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesListResponse>;
    ipamAggregatesPartialUpdate(req: operations.IpamAggregatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamAggregatesRead(req: operations.IpamAggregatesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesReadResponse>;
    ipamAggregatesUpdate(req: operations.IpamAggregatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamAggregatesUpdateResponse>;
    ipamIpAddressesCreate(req: shared.WritableIPAddressInput, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesCreateResponse>;
    ipamIpAddressesDelete(req: operations.IpamIpAddressesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamIpAddressesList(req: operations.IpamIpAddressesListRequest, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesListResponse>;
    ipamIpAddressesPartialUpdate(req: operations.IpamIpAddressesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamIpAddressesRead(req: operations.IpamIpAddressesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesReadResponse>;
    ipamIpAddressesUpdate(req: operations.IpamIpAddressesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamIpAddressesUpdateResponse>;
    /**
     * A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
     * returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
     * however results will not be paginated.
     *
     * The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
     * invoked in parallel, which results in a race condition where multiple insertions can occur.
     */
    ipamPrefixesAvailableIpsCreate(req: operations.IpamPrefixesAvailableIpsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesAvailableIpsCreateResponse>;
    /**
     * A convenience method for returning available IP addresses within a prefix. By default, the number of IPs
     * returned will be equivalent to PAGINATE_COUNT. An arbitrary limit (up to MAX_PAGE_SIZE, if set) may be passed,
     * however results will not be paginated.
     *
     * The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
     * invoked in parallel, which results in a race condition where multiple insertions can occur.
     */
    ipamPrefixesAvailableIpsRead(req: operations.IpamPrefixesAvailableIpsReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesAvailableIpsReadResponse>;
    /**
     * A convenience method for returning available child prefixes within a parent.
     *
     * @remarks
     * The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
     * invoked in parallel, which results in a race condition where multiple insertions can occur.
     */
    ipamPrefixesAvailablePrefixesCreate(req: operations.IpamPrefixesAvailablePrefixesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesAvailablePrefixesCreateResponse>;
    /**
     * A convenience method for returning available child prefixes within a parent.
     *
     * @remarks
     * The advisory lock decorator uses a PostgreSQL advisory lock to prevent this API from being
     * invoked in parallel, which results in a race condition where multiple insertions can occur.
     */
    ipamPrefixesAvailablePrefixesRead(req: operations.IpamPrefixesAvailablePrefixesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesAvailablePrefixesReadResponse>;
    ipamPrefixesCreate(req: shared.WritablePrefixInput, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesCreateResponse>;
    ipamPrefixesDelete(req: operations.IpamPrefixesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamPrefixesList(req: operations.IpamPrefixesListRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesListResponse>;
    ipamPrefixesPartialUpdate(req: operations.IpamPrefixesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamPrefixesRead(req: operations.IpamPrefixesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesReadResponse>;
    ipamPrefixesUpdate(req: operations.IpamPrefixesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamPrefixesUpdateResponse>;
    ipamRirsCreate(req: shared.RIRInput, config?: AxiosRequestConfig): Promise<operations.IpamRirsCreateResponse>;
    ipamRirsDelete(req: operations.IpamRirsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamRirsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamRirsList(req: operations.IpamRirsListRequest, config?: AxiosRequestConfig): Promise<operations.IpamRirsListResponse>;
    ipamRirsPartialUpdate(req: operations.IpamRirsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamRirsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamRirsRead(req: operations.IpamRirsReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamRirsReadResponse>;
    ipamRirsUpdate(req: operations.IpamRirsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamRirsUpdateResponse>;
    ipamRolesCreate(req: shared.RoleInput, config?: AxiosRequestConfig): Promise<operations.IpamRolesCreateResponse>;
    ipamRolesDelete(req: operations.IpamRolesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamRolesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamRolesList(req: operations.IpamRolesListRequest, config?: AxiosRequestConfig): Promise<operations.IpamRolesListResponse>;
    ipamRolesPartialUpdate(req: operations.IpamRolesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamRolesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamRolesRead(req: operations.IpamRolesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamRolesReadResponse>;
    ipamRolesUpdate(req: operations.IpamRolesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamRolesUpdateResponse>;
    ipamServicesCreate(req: shared.WritableServiceInput, config?: AxiosRequestConfig): Promise<operations.IpamServicesCreateResponse>;
    ipamServicesDelete(req: operations.IpamServicesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamServicesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamServicesList(req: operations.IpamServicesListRequest, config?: AxiosRequestConfig): Promise<operations.IpamServicesListResponse>;
    ipamServicesPartialUpdate(req: operations.IpamServicesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamServicesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamServicesRead(req: operations.IpamServicesReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamServicesReadResponse>;
    ipamServicesUpdate(req: operations.IpamServicesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamServicesUpdateResponse>;
    ipamVlanGroupsCreate(req: shared.WritableVLANGroupInput, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsCreateResponse>;
    ipamVlanGroupsDelete(req: operations.IpamVlanGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamVlanGroupsList(req: operations.IpamVlanGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsListResponse>;
    ipamVlanGroupsPartialUpdate(req: operations.IpamVlanGroupsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamVlanGroupsRead(req: operations.IpamVlanGroupsReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsReadResponse>;
    ipamVlanGroupsUpdate(req: operations.IpamVlanGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlanGroupsUpdateResponse>;
    ipamVlansCreate(req: shared.WritableVLANInput, config?: AxiosRequestConfig): Promise<operations.IpamVlansCreateResponse>;
    ipamVlansDelete(req: operations.IpamVlansDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlansDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamVlansList(req: operations.IpamVlansListRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlansListResponse>;
    ipamVlansPartialUpdate(req: operations.IpamVlansPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlansPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamVlansRead(req: operations.IpamVlansReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlansReadResponse>;
    ipamVlansUpdate(req: operations.IpamVlansUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVlansUpdateResponse>;
    ipamVrfsCreate(req: shared.WritableVRFInput, config?: AxiosRequestConfig): Promise<operations.IpamVrfsCreateResponse>;
    ipamVrfsDelete(req: operations.IpamVrfsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IpamVrfsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamVrfsList(req: operations.IpamVrfsListRequest, config?: AxiosRequestConfig): Promise<operations.IpamVrfsListResponse>;
    ipamVrfsPartialUpdate(req: operations.IpamVrfsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVrfsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    ipamVrfsRead(req: operations.IpamVrfsReadRequest, config?: AxiosRequestConfig): Promise<operations.IpamVrfsReadResponse>;
    ipamVrfsUpdate(req: operations.IpamVrfsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IpamVrfsUpdateResponse>;
}
