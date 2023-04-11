import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The type of definition. Can be one of 'application', 'applicationCategory', 'host', 'port', 'ipRange' or 'localNet'.
 */
export declare enum UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    IpRange = "ipRange",
    LocalNet = "localNet",
    Port = "port"
}
export declare class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions extends SpeakeasyBase {
    /**
     * The type of definition. Can be one of 'application', 'applicationCategory', 'host', 'port', 'ipRange' or 'localNet'.
     */
    type: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;
    /**
     *     If "type" is 'host', 'port', 'ipRange' or 'localNet', then "value" must be a string, matching either
     *
     * @remarks
     *     a hostname (e.g. "somesite.com"), a port (e.g. 8080), or an IP range ("192.1.0.0",
     *     "192.1.0.0/16", or "10.1.0.0/16:80"). 'localNet' also supports CIDR notation, excluding
     *     custom ports.
     *      If "type" is 'application' or 'applicationCategory', then "value" must be an object
     *     with the structure { "id": "meraki:layer7/..." }, where "id" is the application category or
     *     application ID (for a list of IDs for your network, use the trafficShaping/applicationCategories
     *     endpoint).
     *
     */
    value: string;
}
/**
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
 */
export declare class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits extends SpeakeasyBase {
    /**
     * The maximum download limit (integer, in Kbps).
     */
    limitDown?: number;
    /**
     * The maximum upload limit (integer, in Kbps).
     */
    limitUp?: number;
}
/**
 *     An object describing the bandwidth settings for your rule.
 *
 * @remarks
 *
 */
export declare class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits extends SpeakeasyBase {
    /**
     * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
     */
    bandwidthLimits?: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;
    /**
     * How bandwidth limits are applied by your rule. Can be one of 'network default', 'ignore' or 'custom'.
     */
    settings?: string;
}
export declare class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules extends SpeakeasyBase {
    /**
     *     A list of objects describing the definitions of your traffic shaping rule. At least one definition is required.
     *
     * @remarks
     *
     */
    definitions: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions[];
    /**
     *     The DSCP tag applied by your rule. null means 'Do not change DSCP tag'.
     *
     * @remarks
     *     For a list of possible tag values, use the trafficShaping/dscpTaggingOptions endpoint.
     *
     */
    dscpTagValue?: number;
    /**
     *     The PCP tag applied by your rule. Can be 0 (lowest priority) through 7 (highest priority).
     *
     * @remarks
     *     null means 'Do not set PCP tag'.
     *
     */
    pcpTagValue?: number;
    /**
     *     An object describing the bandwidth settings for your rule.
     *
     * @remarks
     *
     */
    perClientBandwidthLimits?: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
}
export declare class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody extends SpeakeasyBase {
    /**
     * Whether default traffic shaping rules are enabled (true) or disabled (false). There are 4 default rules, which can be seen on your network's traffic shaping page. Note that default rules count against the rule limit of 8.
     */
    defaultRulesEnabled?: boolean;
    /**
     *     An array of traffic shaping rules. Rules are applied in the order that
     *
     * @remarks
     *     they are specified in. An empty list (or null) means no rules. Note that
     *     you are allowed a maximum of 8 rules.
     *
     */
    rules?: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules[];
    /**
     * Whether traffic shaping rules are applied to clients on your SSID.
     */
    trafficShapingEnabled?: boolean;
}
export declare class UpdateNetworkWirelessSsidTrafficShapingRulesRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody;
    networkId: string;
    number: string;
}
export declare class UpdateNetworkWirelessSsidTrafficShapingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject?: Record<string, any>;
}
