import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Dcim {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    dcimCablesCreate(req: shared.WritableCableInput, config?: AxiosRequestConfig): Promise<operations.DcimCablesCreateResponse>;
    dcimCablesDelete(req: operations.DcimCablesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimCablesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimCablesList(req: operations.DcimCablesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimCablesListResponse>;
    dcimCablesPartialUpdate(req: operations.DcimCablesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimCablesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimCablesRead(req: operations.DcimCablesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimCablesReadResponse>;
    dcimCablesUpdate(req: operations.DcimCablesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimCablesUpdateResponse>;
    /**
     * This endpoint allows a user to determine what device (if any) is connected to a given peer device and peer
     * interface. This is useful in a situation where a device boots with no configuration, but can detect its neighbors
     * via a protocol such as LLDP. Two query parameters must be included in the request:
     *
     * * `peer_device`: The name of the peer device
     * * `peer_interface`: The name of the peer interface
     */
    dcimConnectedDeviceList(req: operations.DcimConnectedDeviceListRequest, config?: AxiosRequestConfig): Promise<operations.DcimConnectedDeviceListResponse>;
    dcimConsoleConnectionsList(req: operations.DcimConsoleConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleConnectionsListResponse>;
    dcimConsolePortTemplatesCreate(req: shared.WritableConsolePortTemplateInput, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortTemplatesCreateResponse>;
    dcimConsolePortTemplatesDelete(req: operations.DcimConsolePortTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortTemplatesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimConsolePortTemplatesList(req: operations.DcimConsolePortTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortTemplatesListResponse>;
    dcimConsolePortTemplatesPartialUpdate(req: operations.DcimConsolePortTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortTemplatesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimConsolePortTemplatesRead(req: operations.DcimConsolePortTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortTemplatesReadResponse>;
    dcimConsolePortTemplatesUpdate(req: operations.DcimConsolePortTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortTemplatesUpdateResponse>;
    dcimConsolePortsCreate(req: shared.WritableConsolePortInput, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortsCreateResponse>;
    dcimConsolePortsDelete(req: operations.DcimConsolePortsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimConsolePortsList(req: operations.DcimConsolePortsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortsListResponse>;
    dcimConsolePortsPartialUpdate(req: operations.DcimConsolePortsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimConsolePortsRead(req: operations.DcimConsolePortsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortsReadResponse>;
    /**
     * Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
     */
    dcimConsolePortsTrace(req: operations.DcimConsolePortsTraceRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortsTraceResponse>;
    dcimConsolePortsUpdate(req: operations.DcimConsolePortsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsolePortsUpdateResponse>;
    dcimConsoleServerPortTemplatesCreate(req: shared.WritableConsoleServerPortTemplateInput, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortTemplatesCreateResponse>;
    dcimConsoleServerPortTemplatesDelete(req: operations.DcimConsoleServerPortTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortTemplatesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimConsoleServerPortTemplatesList(req: operations.DcimConsoleServerPortTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortTemplatesListResponse>;
    dcimConsoleServerPortTemplatesPartialUpdate(req: operations.DcimConsoleServerPortTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortTemplatesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimConsoleServerPortTemplatesRead(req: operations.DcimConsoleServerPortTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortTemplatesReadResponse>;
    dcimConsoleServerPortTemplatesUpdate(req: operations.DcimConsoleServerPortTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortTemplatesUpdateResponse>;
    dcimConsoleServerPortsCreate(req: shared.WritableConsoleServerPortInput, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortsCreateResponse>;
    dcimConsoleServerPortsDelete(req: operations.DcimConsoleServerPortsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimConsoleServerPortsList(req: operations.DcimConsoleServerPortsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortsListResponse>;
    dcimConsoleServerPortsPartialUpdate(req: operations.DcimConsoleServerPortsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimConsoleServerPortsRead(req: operations.DcimConsoleServerPortsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortsReadResponse>;
    /**
     * Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
     */
    dcimConsoleServerPortsTrace(req: operations.DcimConsoleServerPortsTraceRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortsTraceResponse>;
    dcimConsoleServerPortsUpdate(req: operations.DcimConsoleServerPortsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimConsoleServerPortsUpdateResponse>;
    dcimDeviceBayTemplatesCreate(req: shared.WritableDeviceBayTemplateInput, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBayTemplatesCreateResponse>;
    dcimDeviceBayTemplatesDelete(req: operations.DcimDeviceBayTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBayTemplatesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimDeviceBayTemplatesList(req: operations.DcimDeviceBayTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBayTemplatesListResponse>;
    dcimDeviceBayTemplatesPartialUpdate(req: operations.DcimDeviceBayTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBayTemplatesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimDeviceBayTemplatesRead(req: operations.DcimDeviceBayTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBayTemplatesReadResponse>;
    dcimDeviceBayTemplatesUpdate(req: operations.DcimDeviceBayTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBayTemplatesUpdateResponse>;
    dcimDeviceBaysCreate(req: shared.WritableDeviceBayInput, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBaysCreateResponse>;
    dcimDeviceBaysDelete(req: operations.DcimDeviceBaysDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBaysDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimDeviceBaysList(req: operations.DcimDeviceBaysListRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBaysListResponse>;
    dcimDeviceBaysPartialUpdate(req: operations.DcimDeviceBaysPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBaysPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimDeviceBaysRead(req: operations.DcimDeviceBaysReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBaysReadResponse>;
    dcimDeviceBaysUpdate(req: operations.DcimDeviceBaysUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceBaysUpdateResponse>;
    dcimDeviceRolesCreate(req: shared.DeviceRoleInput, config?: AxiosRequestConfig): Promise<operations.DcimDeviceRolesCreateResponse>;
    dcimDeviceRolesDelete(req: operations.DcimDeviceRolesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceRolesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimDeviceRolesList(req: operations.DcimDeviceRolesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceRolesListResponse>;
    dcimDeviceRolesPartialUpdate(req: operations.DcimDeviceRolesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceRolesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimDeviceRolesRead(req: operations.DcimDeviceRolesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceRolesReadResponse>;
    dcimDeviceRolesUpdate(req: operations.DcimDeviceRolesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceRolesUpdateResponse>;
    dcimDeviceTypesCreate(req: shared.WritableDeviceTypeInput, config?: AxiosRequestConfig): Promise<operations.DcimDeviceTypesCreateResponse>;
    dcimDeviceTypesDelete(req: operations.DcimDeviceTypesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceTypesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimDeviceTypesList(req: operations.DcimDeviceTypesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceTypesListResponse>;
    dcimDeviceTypesPartialUpdate(req: operations.DcimDeviceTypesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceTypesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimDeviceTypesRead(req: operations.DcimDeviceTypesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceTypesReadResponse>;
    dcimDeviceTypesUpdate(req: operations.DcimDeviceTypesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDeviceTypesUpdateResponse>;
    dcimDevicesCreate(req: shared.WritableDeviceWithConfigContextInput, config?: AxiosRequestConfig): Promise<operations.DcimDevicesCreateResponse>;
    dcimDevicesDelete(req: operations.DcimDevicesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimDevicesDeleteResponse>;
    /**
     * A convenience method for rendering graphs for a particular Device.
     */
    dcimDevicesGraphs(req: operations.DcimDevicesGraphsRequest, config?: AxiosRequestConfig): Promise<operations.DcimDevicesGraphsResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimDevicesList(req: operations.DcimDevicesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimDevicesListResponse>;
    /**
     * Execute a NAPALM method on a Device
     */
    dcimDevicesNapalm(req: operations.DcimDevicesNapalmRequest, config?: AxiosRequestConfig): Promise<operations.DcimDevicesNapalmResponse>;
    dcimDevicesPartialUpdate(req: operations.DcimDevicesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDevicesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimDevicesRead(req: operations.DcimDevicesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimDevicesReadResponse>;
    dcimDevicesUpdate(req: operations.DcimDevicesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimDevicesUpdateResponse>;
    dcimFrontPortTemplatesCreate(req: shared.WritableFrontPortTemplateInput, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortTemplatesCreateResponse>;
    dcimFrontPortTemplatesDelete(req: operations.DcimFrontPortTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortTemplatesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimFrontPortTemplatesList(req: operations.DcimFrontPortTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortTemplatesListResponse>;
    dcimFrontPortTemplatesPartialUpdate(req: operations.DcimFrontPortTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortTemplatesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimFrontPortTemplatesRead(req: operations.DcimFrontPortTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortTemplatesReadResponse>;
    dcimFrontPortTemplatesUpdate(req: operations.DcimFrontPortTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortTemplatesUpdateResponse>;
    dcimFrontPortsCreate(req: shared.WritableFrontPortInput, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortsCreateResponse>;
    dcimFrontPortsDelete(req: operations.DcimFrontPortsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimFrontPortsList(req: operations.DcimFrontPortsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortsListResponse>;
    dcimFrontPortsPartialUpdate(req: operations.DcimFrontPortsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimFrontPortsRead(req: operations.DcimFrontPortsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortsReadResponse>;
    /**
     * Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
     */
    dcimFrontPortsTrace(req: operations.DcimFrontPortsTraceRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortsTraceResponse>;
    dcimFrontPortsUpdate(req: operations.DcimFrontPortsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimFrontPortsUpdateResponse>;
    dcimInterfaceConnectionsList(req: operations.DcimInterfaceConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfaceConnectionsListResponse>;
    dcimInterfaceTemplatesCreate(req: shared.WritableInterfaceTemplateInput, config?: AxiosRequestConfig): Promise<operations.DcimInterfaceTemplatesCreateResponse>;
    dcimInterfaceTemplatesDelete(req: operations.DcimInterfaceTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfaceTemplatesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimInterfaceTemplatesList(req: operations.DcimInterfaceTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfaceTemplatesListResponse>;
    dcimInterfaceTemplatesPartialUpdate(req: operations.DcimInterfaceTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfaceTemplatesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimInterfaceTemplatesRead(req: operations.DcimInterfaceTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfaceTemplatesReadResponse>;
    dcimInterfaceTemplatesUpdate(req: operations.DcimInterfaceTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfaceTemplatesUpdateResponse>;
    dcimInterfacesCreate(req: shared.WritableDeviceInterfaceInput, config?: AxiosRequestConfig): Promise<operations.DcimInterfacesCreateResponse>;
    dcimInterfacesDelete(req: operations.DcimInterfacesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfacesDeleteResponse>;
    /**
     * A convenience method for rendering graphs for a particular interface.
     */
    dcimInterfacesGraphs(req: operations.DcimInterfacesGraphsRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfacesGraphsResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimInterfacesList(req: operations.DcimInterfacesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfacesListResponse>;
    dcimInterfacesPartialUpdate(req: operations.DcimInterfacesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfacesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimInterfacesRead(req: operations.DcimInterfacesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfacesReadResponse>;
    /**
     * Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
     */
    dcimInterfacesTrace(req: operations.DcimInterfacesTraceRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfacesTraceResponse>;
    dcimInterfacesUpdate(req: operations.DcimInterfacesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimInterfacesUpdateResponse>;
    dcimInventoryItemsCreate(req: shared.WritableInventoryItemInput, config?: AxiosRequestConfig): Promise<operations.DcimInventoryItemsCreateResponse>;
    dcimInventoryItemsDelete(req: operations.DcimInventoryItemsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimInventoryItemsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimInventoryItemsList(req: operations.DcimInventoryItemsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimInventoryItemsListResponse>;
    dcimInventoryItemsPartialUpdate(req: operations.DcimInventoryItemsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimInventoryItemsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimInventoryItemsRead(req: operations.DcimInventoryItemsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimInventoryItemsReadResponse>;
    dcimInventoryItemsUpdate(req: operations.DcimInventoryItemsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimInventoryItemsUpdateResponse>;
    dcimManufacturersCreate(req: shared.ManufacturerInput, config?: AxiosRequestConfig): Promise<operations.DcimManufacturersCreateResponse>;
    dcimManufacturersDelete(req: operations.DcimManufacturersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimManufacturersDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimManufacturersList(req: operations.DcimManufacturersListRequest, config?: AxiosRequestConfig): Promise<operations.DcimManufacturersListResponse>;
    dcimManufacturersPartialUpdate(req: operations.DcimManufacturersPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimManufacturersPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimManufacturersRead(req: operations.DcimManufacturersReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimManufacturersReadResponse>;
    dcimManufacturersUpdate(req: operations.DcimManufacturersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimManufacturersUpdateResponse>;
    dcimPlatformsCreate(req: shared.WritablePlatformInput, config?: AxiosRequestConfig): Promise<operations.DcimPlatformsCreateResponse>;
    dcimPlatformsDelete(req: operations.DcimPlatformsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimPlatformsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimPlatformsList(req: operations.DcimPlatformsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimPlatformsListResponse>;
    dcimPlatformsPartialUpdate(req: operations.DcimPlatformsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPlatformsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimPlatformsRead(req: operations.DcimPlatformsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimPlatformsReadResponse>;
    dcimPlatformsUpdate(req: operations.DcimPlatformsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPlatformsUpdateResponse>;
    dcimPowerConnectionsList(req: operations.DcimPowerConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerConnectionsListResponse>;
    dcimPowerFeedsCreate(req: shared.WritablePowerFeedInput, config?: AxiosRequestConfig): Promise<operations.DcimPowerFeedsCreateResponse>;
    dcimPowerFeedsDelete(req: operations.DcimPowerFeedsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerFeedsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimPowerFeedsList(req: operations.DcimPowerFeedsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerFeedsListResponse>;
    dcimPowerFeedsPartialUpdate(req: operations.DcimPowerFeedsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerFeedsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimPowerFeedsRead(req: operations.DcimPowerFeedsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerFeedsReadResponse>;
    dcimPowerFeedsUpdate(req: operations.DcimPowerFeedsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerFeedsUpdateResponse>;
    dcimPowerOutletTemplatesCreate(req: shared.WritablePowerOutletTemplateInput, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletTemplatesCreateResponse>;
    dcimPowerOutletTemplatesDelete(req: operations.DcimPowerOutletTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletTemplatesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimPowerOutletTemplatesList(req: operations.DcimPowerOutletTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletTemplatesListResponse>;
    dcimPowerOutletTemplatesPartialUpdate(req: operations.DcimPowerOutletTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletTemplatesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimPowerOutletTemplatesRead(req: operations.DcimPowerOutletTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletTemplatesReadResponse>;
    dcimPowerOutletTemplatesUpdate(req: operations.DcimPowerOutletTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletTemplatesUpdateResponse>;
    dcimPowerOutletsCreate(req: shared.WritablePowerOutletInput, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletsCreateResponse>;
    dcimPowerOutletsDelete(req: operations.DcimPowerOutletsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimPowerOutletsList(req: operations.DcimPowerOutletsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletsListResponse>;
    dcimPowerOutletsPartialUpdate(req: operations.DcimPowerOutletsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimPowerOutletsRead(req: operations.DcimPowerOutletsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletsReadResponse>;
    /**
     * Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
     */
    dcimPowerOutletsTrace(req: operations.DcimPowerOutletsTraceRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletsTraceResponse>;
    dcimPowerOutletsUpdate(req: operations.DcimPowerOutletsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerOutletsUpdateResponse>;
    dcimPowerPanelsCreate(req: shared.WritablePowerPanelInput, config?: AxiosRequestConfig): Promise<operations.DcimPowerPanelsCreateResponse>;
    dcimPowerPanelsDelete(req: operations.DcimPowerPanelsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPanelsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimPowerPanelsList(req: operations.DcimPowerPanelsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPanelsListResponse>;
    dcimPowerPanelsPartialUpdate(req: operations.DcimPowerPanelsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPanelsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimPowerPanelsRead(req: operations.DcimPowerPanelsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPanelsReadResponse>;
    dcimPowerPanelsUpdate(req: operations.DcimPowerPanelsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPanelsUpdateResponse>;
    dcimPowerPortTemplatesCreate(req: shared.WritablePowerPortTemplateInput, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortTemplatesCreateResponse>;
    dcimPowerPortTemplatesDelete(req: operations.DcimPowerPortTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortTemplatesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimPowerPortTemplatesList(req: operations.DcimPowerPortTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortTemplatesListResponse>;
    dcimPowerPortTemplatesPartialUpdate(req: operations.DcimPowerPortTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortTemplatesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimPowerPortTemplatesRead(req: operations.DcimPowerPortTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortTemplatesReadResponse>;
    dcimPowerPortTemplatesUpdate(req: operations.DcimPowerPortTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortTemplatesUpdateResponse>;
    dcimPowerPortsCreate(req: shared.WritablePowerPortInput, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortsCreateResponse>;
    dcimPowerPortsDelete(req: operations.DcimPowerPortsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimPowerPortsList(req: operations.DcimPowerPortsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortsListResponse>;
    dcimPowerPortsPartialUpdate(req: operations.DcimPowerPortsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimPowerPortsRead(req: operations.DcimPowerPortsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortsReadResponse>;
    /**
     * Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
     */
    dcimPowerPortsTrace(req: operations.DcimPowerPortsTraceRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortsTraceResponse>;
    dcimPowerPortsUpdate(req: operations.DcimPowerPortsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimPowerPortsUpdateResponse>;
    dcimRackGroupsCreate(req: shared.WritableRackGroupInput, config?: AxiosRequestConfig): Promise<operations.DcimRackGroupsCreateResponse>;
    dcimRackGroupsDelete(req: operations.DcimRackGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackGroupsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimRackGroupsList(req: operations.DcimRackGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackGroupsListResponse>;
    dcimRackGroupsPartialUpdate(req: operations.DcimRackGroupsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackGroupsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimRackGroupsRead(req: operations.DcimRackGroupsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackGroupsReadResponse>;
    dcimRackGroupsUpdate(req: operations.DcimRackGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackGroupsUpdateResponse>;
    dcimRackReservationsCreate(req: shared.WritableRackReservationInput, config?: AxiosRequestConfig): Promise<operations.DcimRackReservationsCreateResponse>;
    dcimRackReservationsDelete(req: operations.DcimRackReservationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackReservationsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimRackReservationsList(req: operations.DcimRackReservationsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackReservationsListResponse>;
    dcimRackReservationsPartialUpdate(req: operations.DcimRackReservationsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackReservationsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimRackReservationsRead(req: operations.DcimRackReservationsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackReservationsReadResponse>;
    dcimRackReservationsUpdate(req: operations.DcimRackReservationsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackReservationsUpdateResponse>;
    dcimRackRolesCreate(req: shared.RackRoleInput, config?: AxiosRequestConfig): Promise<operations.DcimRackRolesCreateResponse>;
    dcimRackRolesDelete(req: operations.DcimRackRolesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackRolesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimRackRolesList(req: operations.DcimRackRolesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackRolesListResponse>;
    dcimRackRolesPartialUpdate(req: operations.DcimRackRolesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackRolesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimRackRolesRead(req: operations.DcimRackRolesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackRolesReadResponse>;
    dcimRackRolesUpdate(req: operations.DcimRackRolesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRackRolesUpdateResponse>;
    dcimRacksCreate(req: shared.WritableRackInput, config?: AxiosRequestConfig): Promise<operations.DcimRacksCreateResponse>;
    dcimRacksDelete(req: operations.DcimRacksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimRacksDeleteResponse>;
    /**
     * Rack elevation representing the list of rack units. Also supports rendering the elevation as an SVG.
     */
    dcimRacksElevation(req: operations.DcimRacksElevationRequest, config?: AxiosRequestConfig): Promise<operations.DcimRacksElevationResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimRacksList(req: operations.DcimRacksListRequest, config?: AxiosRequestConfig): Promise<operations.DcimRacksListResponse>;
    dcimRacksPartialUpdate(req: operations.DcimRacksPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRacksPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimRacksRead(req: operations.DcimRacksReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimRacksReadResponse>;
    dcimRacksUpdate(req: operations.DcimRacksUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRacksUpdateResponse>;
    dcimRearPortTemplatesCreate(req: shared.WritableRearPortTemplateInput, config?: AxiosRequestConfig): Promise<operations.DcimRearPortTemplatesCreateResponse>;
    dcimRearPortTemplatesDelete(req: operations.DcimRearPortTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortTemplatesDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimRearPortTemplatesList(req: operations.DcimRearPortTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortTemplatesListResponse>;
    dcimRearPortTemplatesPartialUpdate(req: operations.DcimRearPortTemplatesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortTemplatesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimRearPortTemplatesRead(req: operations.DcimRearPortTemplatesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortTemplatesReadResponse>;
    dcimRearPortTemplatesUpdate(req: operations.DcimRearPortTemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortTemplatesUpdateResponse>;
    dcimRearPortsCreate(req: shared.WritableRearPortInput, config?: AxiosRequestConfig): Promise<operations.DcimRearPortsCreateResponse>;
    dcimRearPortsDelete(req: operations.DcimRearPortsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimRearPortsList(req: operations.DcimRearPortsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortsListResponse>;
    dcimRearPortsPartialUpdate(req: operations.DcimRearPortsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimRearPortsRead(req: operations.DcimRearPortsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortsReadResponse>;
    /**
     * Trace a complete cable path and return each segment as a three-tuple of (termination, cable, termination).
     */
    dcimRearPortsTrace(req: operations.DcimRearPortsTraceRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortsTraceResponse>;
    dcimRearPortsUpdate(req: operations.DcimRearPortsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRearPortsUpdateResponse>;
    dcimRegionsCreate(req: shared.WritableRegionInput, config?: AxiosRequestConfig): Promise<operations.DcimRegionsCreateResponse>;
    dcimRegionsDelete(req: operations.DcimRegionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimRegionsDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimRegionsList(req: operations.DcimRegionsListRequest, config?: AxiosRequestConfig): Promise<operations.DcimRegionsListResponse>;
    dcimRegionsPartialUpdate(req: operations.DcimRegionsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRegionsPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimRegionsRead(req: operations.DcimRegionsReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimRegionsReadResponse>;
    dcimRegionsUpdate(req: operations.DcimRegionsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimRegionsUpdateResponse>;
    dcimSitesCreate(req: shared.WritableSiteInput, config?: AxiosRequestConfig): Promise<operations.DcimSitesCreateResponse>;
    dcimSitesDelete(req: operations.DcimSitesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimSitesDeleteResponse>;
    /**
     * A convenience method for rendering graphs for a particular site.
     */
    dcimSitesGraphs(req: operations.DcimSitesGraphsRequest, config?: AxiosRequestConfig): Promise<operations.DcimSitesGraphsResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimSitesList(req: operations.DcimSitesListRequest, config?: AxiosRequestConfig): Promise<operations.DcimSitesListResponse>;
    dcimSitesPartialUpdate(req: operations.DcimSitesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimSitesPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimSitesRead(req: operations.DcimSitesReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimSitesReadResponse>;
    dcimSitesUpdate(req: operations.DcimSitesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimSitesUpdateResponse>;
    dcimVirtualChassisCreate(req: shared.WritableVirtualChassisInput, config?: AxiosRequestConfig): Promise<operations.DcimVirtualChassisCreateResponse>;
    dcimVirtualChassisDelete(req: operations.DcimVirtualChassisDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DcimVirtualChassisDeleteResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimVirtualChassisList(req: operations.DcimVirtualChassisListRequest, config?: AxiosRequestConfig): Promise<operations.DcimVirtualChassisListResponse>;
    dcimVirtualChassisPartialUpdate(req: operations.DcimVirtualChassisPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimVirtualChassisPartialUpdateResponse>;
    /**
     * Call to super to allow for caching
     */
    dcimVirtualChassisRead(req: operations.DcimVirtualChassisReadRequest, config?: AxiosRequestConfig): Promise<operations.DcimVirtualChassisReadResponse>;
    dcimVirtualChassisUpdate(req: operations.DcimVirtualChassisUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DcimVirtualChassisUpdateResponse>;
}
