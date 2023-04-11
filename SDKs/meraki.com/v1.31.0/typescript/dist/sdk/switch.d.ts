import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Switch {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a switch to a stack
     *
     * @remarks
     * Add a switch to a stack
     */
    addNetworkSwitchStack(req: operations.AddNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.AddNetworkSwitchStackResponse>;
    /**
     * Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
     *
     * @remarks
     * Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring
     */
    cloneOrganizationSwitchDevices(req: operations.CloneOrganizationSwitchDevicesRequest, config?: AxiosRequestConfig): Promise<operations.CloneOrganizationSwitchDevicesResponse>;
    /**
     * Create a layer 3 interface for a switch
     *
     * @remarks
     * Create a layer 3 interface for a switch
     */
    createDeviceSwitchRoutingInterface(req: operations.CreateDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceSwitchRoutingInterfaceResponse>;
    /**
     * Create a layer 3 static route for a switch
     *
     * @remarks
     * Create a layer 3 static route for a switch
     */
    createDeviceSwitchRoutingStaticRoute(req: operations.CreateDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * Create an access policy for a switch network
     *
     * @remarks
     * Create an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.
     */
    createNetworkSwitchAccessPolicy(req: operations.CreateNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchAccessPolicyResponse>;
    /**
     * Add a server to be trusted by Dynamic ARP Inspection on this network
     *
     * @remarks
     * Add a server to be trusted by Dynamic ARP Inspection on this network
     */
    createNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req: operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse>;
    /**
     * Create a link aggregation group
     *
     * @remarks
     * Create a link aggregation group
     */
    createNetworkSwitchLinkAggregation(req: operations.CreateNetworkSwitchLinkAggregationRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchLinkAggregationResponse>;
    /**
     * Add a switch port schedule
     *
     * @remarks
     * Add a switch port schedule
     */
    createNetworkSwitchPortSchedule(req: operations.CreateNetworkSwitchPortScheduleRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchPortScheduleResponse>;
    /**
     * Add a quality of service rule
     *
     * @remarks
     * Add a quality of service rule
     */
    createNetworkSwitchQosRule(req: operations.CreateNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchQosRuleResponse>;
    /**
     * Create a multicast rendezvous point
     *
     * @remarks
     * Create a multicast rendezvous point
     */
    createNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * Create a stack
     *
     * @remarks
     * Create a stack
     */
    createNetworkSwitchStack(req: operations.CreateNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackResponse>;
    /**
     * Create a layer 3 interface for a switch stack
     *
     * @remarks
     * Create a layer 3 interface for a switch stack
     */
    createNetworkSwitchStackRoutingInterface(req: operations.CreateNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * Create a layer 3 static route for a switch stack
     *
     * @remarks
     * Create a layer 3 static route for a switch stack
     */
    createNetworkSwitchStackRoutingStaticRoute(req: operations.CreateNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * Cycle a set of switch ports
     *
     * @remarks
     * Cycle a set of switch ports
     */
    cycleDeviceSwitchPorts(req: operations.CycleDeviceSwitchPortsRequest, config?: AxiosRequestConfig): Promise<operations.CycleDeviceSwitchPortsResponse>;
    /**
     * Delete a layer 3 interface from the switch
     *
     * @remarks
     * Delete a layer 3 interface from the switch
     */
    deleteDeviceSwitchRoutingInterface(req: operations.DeleteDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceSwitchRoutingInterfaceResponse>;
    /**
     * Delete a layer 3 static route for a switch
     *
     * @remarks
     * Delete a layer 3 static route for a switch
     */
    deleteDeviceSwitchRoutingStaticRoute(req: operations.DeleteDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * Delete an access policy for a switch network
     *
     * @remarks
     * Delete an access policy for a switch network
     */
    deleteNetworkSwitchAccessPolicy(req: operations.DeleteNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchAccessPolicyResponse>;
    /**
     * Remove a server from being trusted by Dynamic ARP Inspection on this network
     *
     * @remarks
     * Remove a server from being trusted by Dynamic ARP Inspection on this network
     */
    deleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req: operations.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse>;
    /**
     * Split a link aggregation group into separate ports
     *
     * @remarks
     * Split a link aggregation group into separate ports
     */
    deleteNetworkSwitchLinkAggregation(req: operations.DeleteNetworkSwitchLinkAggregationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchLinkAggregationResponse>;
    /**
     * Delete a switch port schedule
     *
     * @remarks
     * Delete a switch port schedule
     */
    deleteNetworkSwitchPortSchedule(req: operations.DeleteNetworkSwitchPortScheduleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchPortScheduleResponse>;
    /**
     * Delete a quality of service rule
     *
     * @remarks
     * Delete a quality of service rule
     */
    deleteNetworkSwitchQosRule(req: operations.DeleteNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchQosRuleResponse>;
    /**
     * Delete a multicast rendezvous point
     *
     * @remarks
     * Delete a multicast rendezvous point
     */
    deleteNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * Delete a stack
     *
     * @remarks
     * Delete a stack
     */
    deleteNetworkSwitchStack(req: operations.DeleteNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackResponse>;
    /**
     * Delete a layer 3 interface from a switch stack
     *
     * @remarks
     * Delete a layer 3 interface from a switch stack
     */
    deleteNetworkSwitchStackRoutingInterface(req: operations.DeleteNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * Delete a layer 3 static route for a switch stack
     *
     * @remarks
     * Delete a layer 3 static route for a switch stack
     */
    deleteNetworkSwitchStackRoutingStaticRoute(req: operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * Return a switch port
     *
     * @remarks
     * Return a switch port
     */
    getDeviceSwitchPort(req: operations.GetDeviceSwitchPortRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortResponse>;
    /**
     * List the switch ports for a switch
     *
     * @remarks
     * List the switch ports for a switch
     */
    getDeviceSwitchPorts(req: operations.GetDeviceSwitchPortsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortsResponse>;
    /**
     * Return the status for all the ports of a switch
     *
     * @remarks
     * Return the status for all the ports of a switch
     */
    getDeviceSwitchPortsStatuses(req: operations.GetDeviceSwitchPortsStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortsStatusesResponse>;
    /**
     * Return the packet counters for all the ports of a switch
     *
     * @remarks
     * Return the packet counters for all the ports of a switch
     */
    getDeviceSwitchPortsStatusesPackets(req: operations.GetDeviceSwitchPortsStatusesPacketsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortsStatusesPacketsResponse>;
    /**
     * Return a layer 3 interface for a switch
     *
     * @remarks
     * Return a layer 3 interface for a switch
     */
    getDeviceSwitchRoutingInterface(req: operations.GetDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingInterfaceResponse>;
    /**
     * Return a layer 3 interface DHCP configuration for a switch
     *
     * @remarks
     * Return a layer 3 interface DHCP configuration for a switch
     */
    getDeviceSwitchRoutingInterfaceDhcp(req: operations.GetDeviceSwitchRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingInterfaceDhcpResponse>;
    /**
     * List layer 3 interfaces for a switch
     *
     * @remarks
     * List layer 3 interfaces for a switch. Those for a stack may be found under switch stack routing.
     */
    getDeviceSwitchRoutingInterfaces(req: operations.GetDeviceSwitchRoutingInterfacesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingInterfacesResponse>;
    /**
     * Return a layer 3 static route for a switch
     *
     * @remarks
     * Return a layer 3 static route for a switch
     */
    getDeviceSwitchRoutingStaticRoute(req: operations.GetDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * List layer 3 static routes for a switch
     *
     * @remarks
     * List layer 3 static routes for a switch
     */
    getDeviceSwitchRoutingStaticRoutes(req: operations.GetDeviceSwitchRoutingStaticRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingStaticRoutesResponse>;
    /**
     * Return warm spare configuration for a switch
     *
     * @remarks
     * Return warm spare configuration for a switch
     */
    getDeviceSwitchWarmSpare(req: operations.GetDeviceSwitchWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchWarmSpareResponse>;
    /**
     * Return the access control lists for a MS network
     *
     * @remarks
     * Return the access control lists for a MS network
     */
    getNetworkSwitchAccessControlLists(req: operations.GetNetworkSwitchAccessControlListsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAccessControlListsResponse>;
    /**
     * List the access policies for a switch network
     *
     * @remarks
     * List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method
     */
    getNetworkSwitchAccessPolicies(req: operations.GetNetworkSwitchAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAccessPoliciesResponse>;
    /**
     * Return a specific access policy for a switch network
     *
     * @remarks
     * Return a specific access policy for a switch network
     */
    getNetworkSwitchAccessPolicy(req: operations.GetNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAccessPolicyResponse>;
    /**
     * Return the switch alternate management interface for the network
     *
     * @remarks
     * Return the switch alternate management interface for the network
     */
    getNetworkSwitchAlternateManagementInterface(req: operations.GetNetworkSwitchAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAlternateManagementInterfaceResponse>;
    /**
     * Return the DHCP server settings
     *
     * @remarks
     * Return the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively
     */
    getNetworkSwitchDhcpServerPolicy(req: operations.GetNetworkSwitchDhcpServerPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDhcpServerPolicyResponse>;
    /**
     * Return the list of servers trusted by Dynamic ARP Inspection on this network
     *
     * @remarks
     * Return the list of servers trusted by Dynamic ARP Inspection on this network. These are also known as whitelisted snoop entries
     */
    getNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers(req: operations.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersResponse>;
    /**
     * Return the devices that have a Dynamic ARP Inspection warning and their warnings
     *
     * @remarks
     * Return the devices that have a Dynamic ARP Inspection warning and their warnings
     */
    getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice(req: operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceResponse>;
    /**
     * Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
     *
     * @remarks
     * Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
     */
    getNetworkSwitchDhcpV4ServersSeen(req: operations.GetNetworkSwitchDhcpV4ServersSeenRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDhcpV4ServersSeenResponse>;
    /**
     * Return the DSCP to CoS mappings
     *
     * @remarks
     * Return the DSCP to CoS mappings
     */
    getNetworkSwitchDscpToCosMappings(req: operations.GetNetworkSwitchDscpToCosMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDscpToCosMappingsResponse>;
    /**
     * List link aggregation groups
     *
     * @remarks
     * List link aggregation groups
     */
    getNetworkSwitchLinkAggregations(req: operations.GetNetworkSwitchLinkAggregationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchLinkAggregationsResponse>;
    /**
     * Return the MTU configuration
     *
     * @remarks
     * Return the MTU configuration
     */
    getNetworkSwitchMtu(req: operations.GetNetworkSwitchMtuRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchMtuResponse>;
    /**
     * List switch port schedules
     *
     * @remarks
     * List switch port schedules
     */
    getNetworkSwitchPortSchedules(req: operations.GetNetworkSwitchPortSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchPortSchedulesResponse>;
    /**
     * Return a quality of service rule
     *
     * @remarks
     * Return a quality of service rule
     */
    getNetworkSwitchQosRule(req: operations.GetNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchQosRuleResponse>;
    /**
     * List quality of service rules
     *
     * @remarks
     * List quality of service rules
     */
    getNetworkSwitchQosRules(req: operations.GetNetworkSwitchQosRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchQosRulesResponse>;
    /**
     * Return the quality of service rule IDs by order in which they will be processed by the switch
     *
     * @remarks
     * Return the quality of service rule IDs by order in which they will be processed by the switch
     */
    getNetworkSwitchQosRulesOrder(req: operations.GetNetworkSwitchQosRulesOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchQosRulesOrderResponse>;
    /**
     * Return multicast settings for a network
     *
     * @remarks
     * Return multicast settings for a network
     */
    getNetworkSwitchRoutingMulticast(req: operations.GetNetworkSwitchRoutingMulticastRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingMulticastResponse>;
    /**
     * Return a multicast rendezvous point
     *
     * @remarks
     * Return a multicast rendezvous point
     */
    getNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * List multicast rendezvous points
     *
     * @remarks
     * List multicast rendezvous points
     */
    getNetworkSwitchRoutingMulticastRendezvousPoints(req: operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse>;
    /**
     * Return layer 3 OSPF routing configuration
     *
     * @remarks
     * Return layer 3 OSPF routing configuration
     */
    getNetworkSwitchRoutingOspf(req: operations.GetNetworkSwitchRoutingOspfRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingOspfResponse>;
    /**
     * Returns the switch network settings
     *
     * @remarks
     * Returns the switch network settings
     */
    getNetworkSwitchSettings(req: operations.GetNetworkSwitchSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchSettingsResponse>;
    /**
     * Show a switch stack
     *
     * @remarks
     * Show a switch stack
     */
    getNetworkSwitchStack(req: operations.GetNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackResponse>;
    /**
     * Return a layer 3 interface from a switch stack
     *
     * @remarks
     * Return a layer 3 interface from a switch stack
     */
    getNetworkSwitchStackRoutingInterface(req: operations.GetNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * Return a layer 3 interface DHCP configuration for a switch stack
     *
     * @remarks
     * Return a layer 3 interface DHCP configuration for a switch stack
     */
    getNetworkSwitchStackRoutingInterfaceDhcp(req: operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse>;
    /**
     * List layer 3 interfaces for a switch stack
     *
     * @remarks
     * List layer 3 interfaces for a switch stack
     */
    getNetworkSwitchStackRoutingInterfaces(req: operations.GetNetworkSwitchStackRoutingInterfacesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingInterfacesResponse>;
    /**
     * Return a layer 3 static route for a switch stack
     *
     * @remarks
     * Return a layer 3 static route for a switch stack
     */
    getNetworkSwitchStackRoutingStaticRoute(req: operations.GetNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * List layer 3 static routes for a switch stack
     *
     * @remarks
     * List layer 3 static routes for a switch stack
     */
    getNetworkSwitchStackRoutingStaticRoutes(req: operations.GetNetworkSwitchStackRoutingStaticRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingStaticRoutesResponse>;
    /**
     * List the switch stacks in a network
     *
     * @remarks
     * List the switch stacks in a network
     */
    getNetworkSwitchStacks(req: operations.GetNetworkSwitchStacksRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStacksResponse>;
    /**
     * Return the storm control configuration for a switch network
     *
     * @remarks
     * Return the storm control configuration for a switch network
     */
    getNetworkSwitchStormControl(req: operations.GetNetworkSwitchStormControlRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStormControlResponse>;
    /**
     * Returns STP settings
     *
     * @remarks
     * Returns STP settings
     */
    getNetworkSwitchStp(req: operations.GetNetworkSwitchStpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStpResponse>;
    /**
     * Return a switch profile port
     *
     * @remarks
     * Return a switch profile port
     */
    getOrganizationConfigTemplateSwitchProfilePort(req: operations.GetOrganizationConfigTemplateSwitchProfilePortRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplateSwitchProfilePortResponse>;
    /**
     * Return all the ports of a switch profile
     *
     * @remarks
     * Return all the ports of a switch profile
     */
    getOrganizationConfigTemplateSwitchProfilePorts(req: operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse>;
    /**
     * List the switch profiles for your switch template configuration
     *
     * @remarks
     * List the switch profiles for your switch template configuration
     */
    getOrganizationConfigTemplateSwitchProfiles(req: operations.GetOrganizationConfigTemplateSwitchProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplateSwitchProfilesResponse>;
    /**
     * List the switchports in an organization by switch
     *
     * @remarks
     * List the switchports in an organization by switch
     */
    getOrganizationSwitchPortsBySwitch(req: operations.GetOrganizationSwitchPortsBySwitchRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSwitchPortsBySwitchResponse>;
    /**
     * Remove a switch from a stack
     *
     * @remarks
     * Remove a switch from a stack
     */
    removeNetworkSwitchStack(req: operations.RemoveNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.RemoveNetworkSwitchStackResponse>;
    /**
     * Update a switch port
     *
     * @remarks
     * Update a switch port
     */
    updateDeviceSwitchPort(req: operations.UpdateDeviceSwitchPortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchPortResponse>;
    /**
     * Update a layer 3 interface for a switch
     *
     * @remarks
     * Update a layer 3 interface for a switch
     */
    updateDeviceSwitchRoutingInterface(req: operations.UpdateDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingInterfaceResponse>;
    /**
     * Update a layer 3 interface DHCP configuration for a switch
     *
     * @remarks
     * Update a layer 3 interface DHCP configuration for a switch
     */
    updateDeviceSwitchRoutingInterfaceDhcp(req: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse>;
    /**
     * Update a layer 3 static route for a switch
     *
     * @remarks
     * Update a layer 3 static route for a switch
     */
    updateDeviceSwitchRoutingStaticRoute(req: operations.UpdateDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * Update warm spare configuration for a switch
     *
     * @remarks
     * Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.
     */
    updateDeviceSwitchWarmSpare(req: operations.UpdateDeviceSwitchWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchWarmSpareResponse>;
    /**
     * Update the access control lists for a MS network
     *
     * @remarks
     * Update the access control lists for a MS network
     */
    updateNetworkSwitchAccessControlLists(req: operations.UpdateNetworkSwitchAccessControlListsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchAccessControlListsResponse>;
    /**
     * Update an access policy for a switch network
     *
     * @remarks
     * Update an access policy for a switch network. If you would like to enable Meraki Authentication, set radiusServers to empty array.
     */
    updateNetworkSwitchAccessPolicy(req: operations.UpdateNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchAccessPolicyResponse>;
    /**
     * Update the switch alternate management interface for the network
     *
     * @remarks
     * Update the switch alternate management interface for the network
     */
    updateNetworkSwitchAlternateManagementInterface(req: operations.UpdateNetworkSwitchAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse>;
    /**
     * Update the DHCP server settings
     *
     * @remarks
     * Update the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively
     */
    updateNetworkSwitchDhcpServerPolicy(req: operations.UpdateNetworkSwitchDhcpServerPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchDhcpServerPolicyResponse>;
    /**
     * Update a server that is trusted by Dynamic ARP Inspection on this network
     *
     * @remarks
     * Update a server that is trusted by Dynamic ARP Inspection on this network
     */
    updateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(req: operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse>;
    /**
     * Update the DSCP to CoS mappings
     *
     * @remarks
     * Update the DSCP to CoS mappings
     */
    updateNetworkSwitchDscpToCosMappings(req: operations.UpdateNetworkSwitchDscpToCosMappingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchDscpToCosMappingsResponse>;
    /**
     * Update a link aggregation group
     *
     * @remarks
     * Update a link aggregation group
     */
    updateNetworkSwitchLinkAggregation(req: operations.UpdateNetworkSwitchLinkAggregationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchLinkAggregationResponse>;
    /**
     * Update the MTU configuration
     *
     * @remarks
     * Update the MTU configuration
     */
    updateNetworkSwitchMtu(req: operations.UpdateNetworkSwitchMtuRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchMtuResponse>;
    /**
     * Update a switch port schedule
     *
     * @remarks
     * Update a switch port schedule
     */
    updateNetworkSwitchPortSchedule(req: operations.UpdateNetworkSwitchPortScheduleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchPortScheduleResponse>;
    /**
     * Update a quality of service rule
     *
     * @remarks
     * Update a quality of service rule
     */
    updateNetworkSwitchQosRule(req: operations.UpdateNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchQosRuleResponse>;
    /**
     * Update the order in which the rules should be processed by the switch
     *
     * @remarks
     * Update the order in which the rules should be processed by the switch
     */
    updateNetworkSwitchQosRulesOrder(req: operations.UpdateNetworkSwitchQosRulesOrderRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchQosRulesOrderResponse>;
    /**
     * Update multicast settings for a network
     *
     * @remarks
     * Update multicast settings for a network
     */
    updateNetworkSwitchRoutingMulticast(req: operations.UpdateNetworkSwitchRoutingMulticastRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchRoutingMulticastResponse>;
    /**
     * Update a multicast rendezvous point
     *
     * @remarks
     * Update a multicast rendezvous point
     */
    updateNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * Update layer 3 OSPF routing configuration
     *
     * @remarks
     * Update layer 3 OSPF routing configuration
     */
    updateNetworkSwitchRoutingOspf(req: operations.UpdateNetworkSwitchRoutingOspfRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchRoutingOspfResponse>;
    /**
     * Update switch network settings
     *
     * @remarks
     * Update switch network settings
     */
    updateNetworkSwitchSettings(req: operations.UpdateNetworkSwitchSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchSettingsResponse>;
    /**
     * Update a layer 3 interface for a switch stack
     *
     * @remarks
     * Update a layer 3 interface for a switch stack
     */
    updateNetworkSwitchStackRoutingInterface(req: operations.UpdateNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * Update a layer 3 interface DHCP configuration for a switch stack
     *
     * @remarks
     * Update a layer 3 interface DHCP configuration for a switch stack
     */
    updateNetworkSwitchStackRoutingInterfaceDhcp(req: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse>;
    /**
     * Update a layer 3 static route for a switch stack
     *
     * @remarks
     * Update a layer 3 static route for a switch stack
     */
    updateNetworkSwitchStackRoutingStaticRoute(req: operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * Update the storm control configuration for a switch network
     *
     * @remarks
     * Update the storm control configuration for a switch network
     */
    updateNetworkSwitchStormControl(req: operations.UpdateNetworkSwitchStormControlRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStormControlResponse>;
    /**
     * Updates STP settings
     *
     * @remarks
     * Updates STP settings
     */
    updateNetworkSwitchStp(req: operations.UpdateNetworkSwitchStpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStpResponse>;
    /**
     * Update a switch profile port
     *
     * @remarks
     * Update a switch profile port
     */
    updateOrganizationConfigTemplateSwitchProfilePort(req: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse>;
}
