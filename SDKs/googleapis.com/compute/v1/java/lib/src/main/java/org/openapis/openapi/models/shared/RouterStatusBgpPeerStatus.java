/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class RouterStatusBgpPeerStatus {
    /**
     * Routes that were advertised to the remote BGP peer
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("advertisedRoutes")
    public Route[] advertisedRoutes;

    public RouterStatusBgpPeerStatus withAdvertisedRoutes(Route[] advertisedRoutes) {
        this.advertisedRoutes = advertisedRoutes;
        return this;
    }
    
    /**
     * Next free: 15
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bfdStatus")
    public BfdStatus bfdStatus;

    public RouterStatusBgpPeerStatus withBfdStatus(BfdStatus bfdStatus) {
        this.bfdStatus = bfdStatus;
        return this;
    }
    
    /**
     * Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableIpv6")
    public Boolean enableIpv6;

    public RouterStatusBgpPeerStatus withEnableIpv6(Boolean enableIpv6) {
        this.enableIpv6 = enableIpv6;
        return this;
    }
    
    /**
     * IP address of the local BGP interface.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;

    public RouterStatusBgpPeerStatus withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    
    /**
     * IPv6 address of the local BGP interface.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv6NexthopAddress")
    public String ipv6NexthopAddress;

    public RouterStatusBgpPeerStatus withIpv6NexthopAddress(String ipv6NexthopAddress) {
        this.ipv6NexthopAddress = ipv6NexthopAddress;
        return this;
    }
    
    /**
     * URL of the VPN tunnel that this BGP peer controls.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedVpnTunnel")
    public String linkedVpnTunnel;

    public RouterStatusBgpPeerStatus withLinkedVpnTunnel(String linkedVpnTunnel) {
        this.linkedVpnTunnel = linkedVpnTunnel;
        return this;
    }
    
    /**
     * Informs whether MD5 authentication is enabled on this BGP peer.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("md5AuthEnabled")
    public Boolean md5AuthEnabled;

    public RouterStatusBgpPeerStatus withMd5AuthEnabled(Boolean md5AuthEnabled) {
        this.md5AuthEnabled = md5AuthEnabled;
        return this;
    }
    
    /**
     * Name of this BGP peer. Unique within the Routers resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public RouterStatusBgpPeerStatus withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * Number of routes learned from the remote BGP Peer.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numLearnedRoutes")
    public Long numLearnedRoutes;

    public RouterStatusBgpPeerStatus withNumLearnedRoutes(Long numLearnedRoutes) {
        this.numLearnedRoutes = numLearnedRoutes;
        return this;
    }
    
    /**
     * IP address of the remote BGP interface.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("peerIpAddress")
    public String peerIpAddress;

    public RouterStatusBgpPeerStatus withPeerIpAddress(String peerIpAddress) {
        this.peerIpAddress = peerIpAddress;
        return this;
    }
    
    /**
     * IPv6 address of the remote BGP interface.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("peerIpv6NexthopAddress")
    public String peerIpv6NexthopAddress;

    public RouterStatusBgpPeerStatus withPeerIpv6NexthopAddress(String peerIpv6NexthopAddress) {
        this.peerIpv6NexthopAddress = peerIpv6NexthopAddress;
        return this;
    }
    
    /**
     * [Output only] URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances. The VM instance is the peer side of the BGP session.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routerApplianceInstance")
    public String routerApplianceInstance;

    public RouterStatusBgpPeerStatus withRouterApplianceInstance(String routerApplianceInstance) {
        this.routerApplianceInstance = routerApplianceInstance;
        return this;
    }
    
    /**
     * The state of the BGP session. For a list of possible values for this field, see BGP session states.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;

    public RouterStatusBgpPeerStatus withState(String state) {
        this.state = state;
        return this;
    }
    
    /**
     * Status of the BGP peer: {UP, DOWN}
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public RouterStatusBgpPeerStatusStatusEnum status;

    public RouterStatusBgpPeerStatus withStatus(RouterStatusBgpPeerStatusStatusEnum status) {
        this.status = status;
        return this;
    }
    
    /**
     * Indicates why particular status was returned.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusReason")
    public RouterStatusBgpPeerStatusStatusReasonEnum statusReason;

    public RouterStatusBgpPeerStatus withStatusReason(RouterStatusBgpPeerStatusStatusReasonEnum statusReason) {
        this.statusReason = statusReason;
        return this;
    }
    
    /**
     * Time this session has been up. Format: 14 years, 51 weeks, 6 days, 23 hours, 59 minutes, 59 seconds
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uptime")
    public String uptime;

    public RouterStatusBgpPeerStatus withUptime(String uptime) {
        this.uptime = uptime;
        return this;
    }
    
    /**
     * Time this session has been up, in seconds. Format: 145
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uptimeSeconds")
    public String uptimeSeconds;

    public RouterStatusBgpPeerStatus withUptimeSeconds(String uptimeSeconds) {
        this.uptimeSeconds = uptimeSeconds;
        return this;
    }
    
    public RouterStatusBgpPeerStatus(){}
}
