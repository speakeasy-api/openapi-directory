package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeDirectory")
    public UpdateNetworkWirelessSsidRequestBodyActiveDirectory activeDirectory;
    public UpdateNetworkWirelessSsidRequestBody withActiveDirectory(UpdateNetworkWirelessSsidRequestBodyActiveDirectory activeDirectory) {
        this.activeDirectory = activeDirectory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adultContentFilteringEnabled")
    public Boolean adultContentFilteringEnabled;
    public UpdateNetworkWirelessSsidRequestBody withAdultContentFilteringEnabled(Boolean adultContentFilteringEnabled) {
        this.adultContentFilteringEnabled = adultContentFilteringEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apTagsAndVlanIds")
    public UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds[] apTagsAndVlanIds;
    public UpdateNetworkWirelessSsidRequestBody withApTagsAndVlanIds(UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds[] apTagsAndVlanIds) {
        this.apTagsAndVlanIds = apTagsAndVlanIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authMode")
    public UpdateNetworkWirelessSsidRequestBodyAuthModeEnum authMode;
    public UpdateNetworkWirelessSsidRequestBody withAuthMode(UpdateNetworkWirelessSsidRequestBodyAuthModeEnum authMode) {
        this.authMode = authMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availabilityTags")
    public String[] availabilityTags;
    public UpdateNetworkWirelessSsidRequestBody withAvailabilityTags(String[] availabilityTags) {
        this.availabilityTags = availabilityTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableOnAllAps")
    public Boolean availableOnAllAps;
    public UpdateNetworkWirelessSsidRequestBody withAvailableOnAllAps(Boolean availableOnAllAps) {
        this.availableOnAllAps = availableOnAllAps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandSelection")
    public String bandSelection;
    public UpdateNetworkWirelessSsidRequestBody withBandSelection(String bandSelection) {
        this.bandSelection = bandSelection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concentratorNetworkId")
    public String concentratorNetworkId;
    public UpdateNetworkWirelessSsidRequestBody withConcentratorNetworkId(String concentratorNetworkId) {
        this.concentratorNetworkId = concentratorNetworkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultVlanId")
    public Long defaultVlanId;
    public UpdateNetworkWirelessSsidRequestBody withDefaultVlanId(Long defaultVlanId) {
        this.defaultVlanId = defaultVlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsRewrite")
    public UpdateNetworkWirelessSsidRequestBodyDnsRewrite dnsRewrite;
    public UpdateNetworkWirelessSsidRequestBody withDnsRewrite(UpdateNetworkWirelessSsidRequestBodyDnsRewrite dnsRewrite) {
        this.dnsRewrite = dnsRewrite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dot11r")
    public UpdateNetworkWirelessSsidRequestBodyDot11r dot11r;
    public UpdateNetworkWirelessSsidRequestBody withDot11r(UpdateNetworkWirelessSsidRequestBodyDot11r dot11r) {
        this.dot11r = dot11r;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dot11w")
    public UpdateNetworkWirelessSsidRequestBodyDot11w dot11w;
    public UpdateNetworkWirelessSsidRequestBody withDot11w(UpdateNetworkWirelessSsidRequestBodyDot11w dot11w) {
        this.dot11w = dot11w;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkWirelessSsidRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionMode")
    public UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum encryptionMode;
    public UpdateNetworkWirelessSsidRequestBody withEncryptionMode(UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnum encryptionMode) {
        this.encryptionMode = encryptionMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enterpriseAdminAccess")
    public UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum enterpriseAdminAccess;
    public UpdateNetworkWirelessSsidRequestBody withEnterpriseAdminAccess(UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnum enterpriseAdminAccess) {
        this.enterpriseAdminAccess = enterpriseAdminAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAssignmentMode")
    public String ipAssignmentMode;
    public UpdateNetworkWirelessSsidRequestBody withIpAssignmentMode(String ipAssignmentMode) {
        this.ipAssignmentMode = ipAssignmentMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lanIsolationEnabled")
    public Boolean lanIsolationEnabled;
    public UpdateNetworkWirelessSsidRequestBody withLanIsolationEnabled(Boolean lanIsolationEnabled) {
        this.lanIsolationEnabled = lanIsolationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ldap")
    public UpdateNetworkWirelessSsidRequestBodyLdap ldap;
    public UpdateNetworkWirelessSsidRequestBody withLdap(UpdateNetworkWirelessSsidRequestBodyLdap ldap) {
        this.ldap = ldap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localRadius")
    public UpdateNetworkWirelessSsidRequestBodyLocalRadius localRadius;
    public UpdateNetworkWirelessSsidRequestBody withLocalRadius(UpdateNetworkWirelessSsidRequestBodyLocalRadius localRadius) {
        this.localRadius = localRadius;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mandatoryDhcpEnabled")
    public Boolean mandatoryDhcpEnabled;
    public UpdateNetworkWirelessSsidRequestBody withMandatoryDhcpEnabled(Boolean mandatoryDhcpEnabled) {
        this.mandatoryDhcpEnabled = mandatoryDhcpEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minBitrate")
    public Float minBitrate;
    public UpdateNetworkWirelessSsidRequestBody withMinBitrate(Float minBitrate) {
        this.minBitrate = minBitrate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkWirelessSsidRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth")
    public UpdateNetworkWirelessSsidRequestBodyOauth oauth;
    public UpdateNetworkWirelessSsidRequestBody withOauth(UpdateNetworkWirelessSsidRequestBodyOauth oauth) {
        this.oauth = oauth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perClientBandwidthLimitDown")
    public Long perClientBandwidthLimitDown;
    public UpdateNetworkWirelessSsidRequestBody withPerClientBandwidthLimitDown(Long perClientBandwidthLimitDown) {
        this.perClientBandwidthLimitDown = perClientBandwidthLimitDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perClientBandwidthLimitUp")
    public Long perClientBandwidthLimitUp;
    public UpdateNetworkWirelessSsidRequestBody withPerClientBandwidthLimitUp(Long perClientBandwidthLimitUp) {
        this.perClientBandwidthLimitUp = perClientBandwidthLimitUp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perSsidBandwidthLimitDown")
    public Long perSsidBandwidthLimitDown;
    public UpdateNetworkWirelessSsidRequestBody withPerSsidBandwidthLimitDown(Long perSsidBandwidthLimitDown) {
        this.perSsidBandwidthLimitDown = perSsidBandwidthLimitDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("perSsidBandwidthLimitUp")
    public Long perSsidBandwidthLimitUp;
    public UpdateNetworkWirelessSsidRequestBody withPerSsidBandwidthLimitUp(Long perSsidBandwidthLimitUp) {
        this.perSsidBandwidthLimitUp = perSsidBandwidthLimitUp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("psk")
    public String psk;
    public UpdateNetworkWirelessSsidRequestBody withPsk(String psk) {
        this.psk = psk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusAccountingEnabled")
    public Boolean radiusAccountingEnabled;
    public UpdateNetworkWirelessSsidRequestBody withRadiusAccountingEnabled(Boolean radiusAccountingEnabled) {
        this.radiusAccountingEnabled = radiusAccountingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusAccountingInterimInterval")
    public Long radiusAccountingInterimInterval;
    public UpdateNetworkWirelessSsidRequestBody withRadiusAccountingInterimInterval(Long radiusAccountingInterimInterval) {
        this.radiusAccountingInterimInterval = radiusAccountingInterimInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusAccountingServers")
    public UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers[] radiusAccountingServers;
    public UpdateNetworkWirelessSsidRequestBody withRadiusAccountingServers(UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers[] radiusAccountingServers) {
        this.radiusAccountingServers = radiusAccountingServers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusAttributeForGroupPolicies")
    public UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum radiusAttributeForGroupPolicies;
    public UpdateNetworkWirelessSsidRequestBody withRadiusAttributeForGroupPolicies(UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnum radiusAttributeForGroupPolicies) {
        this.radiusAttributeForGroupPolicies = radiusAttributeForGroupPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusAuthenticationNasId")
    public String radiusAuthenticationNasId;
    public UpdateNetworkWirelessSsidRequestBody withRadiusAuthenticationNasId(String radiusAuthenticationNasId) {
        this.radiusAuthenticationNasId = radiusAuthenticationNasId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusCalledStationId")
    public String radiusCalledStationId;
    public UpdateNetworkWirelessSsidRequestBody withRadiusCalledStationId(String radiusCalledStationId) {
        this.radiusCalledStationId = radiusCalledStationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusCoaEnabled")
    public Boolean radiusCoaEnabled;
    public UpdateNetworkWirelessSsidRequestBody withRadiusCoaEnabled(Boolean radiusCoaEnabled) {
        this.radiusCoaEnabled = radiusCoaEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusFailoverPolicy")
    public UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum radiusFailoverPolicy;
    public UpdateNetworkWirelessSsidRequestBody withRadiusFailoverPolicy(UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnum radiusFailoverPolicy) {
        this.radiusFailoverPolicy = radiusFailoverPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusFallbackEnabled")
    public Boolean radiusFallbackEnabled;
    public UpdateNetworkWirelessSsidRequestBody withRadiusFallbackEnabled(Boolean radiusFallbackEnabled) {
        this.radiusFallbackEnabled = radiusFallbackEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusGuestVlanEnabled")
    public Boolean radiusGuestVlanEnabled;
    public UpdateNetworkWirelessSsidRequestBody withRadiusGuestVlanEnabled(Boolean radiusGuestVlanEnabled) {
        this.radiusGuestVlanEnabled = radiusGuestVlanEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusGuestVlanId")
    public Long radiusGuestVlanId;
    public UpdateNetworkWirelessSsidRequestBody withRadiusGuestVlanId(Long radiusGuestVlanId) {
        this.radiusGuestVlanId = radiusGuestVlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusLoadBalancingPolicy")
    public UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum radiusLoadBalancingPolicy;
    public UpdateNetworkWirelessSsidRequestBody withRadiusLoadBalancingPolicy(UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnum radiusLoadBalancingPolicy) {
        this.radiusLoadBalancingPolicy = radiusLoadBalancingPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusOverride")
    public Boolean radiusOverride;
    public UpdateNetworkWirelessSsidRequestBody withRadiusOverride(Boolean radiusOverride) {
        this.radiusOverride = radiusOverride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusProxyEnabled")
    public Boolean radiusProxyEnabled;
    public UpdateNetworkWirelessSsidRequestBody withRadiusProxyEnabled(Boolean radiusProxyEnabled) {
        this.radiusProxyEnabled = radiusProxyEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusServerAttemptsLimit")
    public Long radiusServerAttemptsLimit;
    public UpdateNetworkWirelessSsidRequestBody withRadiusServerAttemptsLimit(Long radiusServerAttemptsLimit) {
        this.radiusServerAttemptsLimit = radiusServerAttemptsLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusServerTimeout")
    public Long radiusServerTimeout;
    public UpdateNetworkWirelessSsidRequestBody withRadiusServerTimeout(Long radiusServerTimeout) {
        this.radiusServerTimeout = radiusServerTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusServers")
    public UpdateNetworkWirelessSsidRequestBodyRadiusServers[] radiusServers;
    public UpdateNetworkWirelessSsidRequestBody withRadiusServers(UpdateNetworkWirelessSsidRequestBodyRadiusServers[] radiusServers) {
        this.radiusServers = radiusServers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radiusTestingEnabled")
    public Boolean radiusTestingEnabled;
    public UpdateNetworkWirelessSsidRequestBody withRadiusTestingEnabled(Boolean radiusTestingEnabled) {
        this.radiusTestingEnabled = radiusTestingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("splashGuestSponsorDomains")
    public String[] splashGuestSponsorDomains;
    public UpdateNetworkWirelessSsidRequestBody withSplashGuestSponsorDomains(String[] splashGuestSponsorDomains) {
        this.splashGuestSponsorDomains = splashGuestSponsorDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("splashPage")
    public UpdateNetworkWirelessSsidRequestBodySplashPageEnum splashPage;
    public UpdateNetworkWirelessSsidRequestBody withSplashPage(UpdateNetworkWirelessSsidRequestBodySplashPageEnum splashPage) {
        this.splashPage = splashPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useVlanTagging")
    public Boolean useVlanTagging;
    public UpdateNetworkWirelessSsidRequestBody withUseVlanTagging(Boolean useVlanTagging) {
        this.useVlanTagging = useVlanTagging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visible")
    public Boolean visible;
    public UpdateNetworkWirelessSsidRequestBody withVisible(Boolean visible) {
        this.visible = visible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlanId")
    public Long vlanId;
    public UpdateNetworkWirelessSsidRequestBody withVlanId(Long vlanId) {
        this.vlanId = vlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("walledGardenEnabled")
    public Boolean walledGardenEnabled;
    public UpdateNetworkWirelessSsidRequestBody withWalledGardenEnabled(Boolean walledGardenEnabled) {
        this.walledGardenEnabled = walledGardenEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("walledGardenRanges")
    public String[] walledGardenRanges;
    public UpdateNetworkWirelessSsidRequestBody withWalledGardenRanges(String[] walledGardenRanges) {
        this.walledGardenRanges = walledGardenRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wpaEncryptionMode")
    public UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum wpaEncryptionMode;
    public UpdateNetworkWirelessSsidRequestBody withWpaEncryptionMode(UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnum wpaEncryptionMode) {
        this.wpaEncryptionMode = wpaEncryptionMode;
        return this;
    }
}