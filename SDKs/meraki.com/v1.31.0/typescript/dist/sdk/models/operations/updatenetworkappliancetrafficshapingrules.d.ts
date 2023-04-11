import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The type of definition. Can be one of 'application', 'applicationCategory', 'host', 'port', 'ipRange' or 'localNet'.
 */
export declare enum UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    IpRange = "ipRange",
    LocalNet = "localNet",
    Port = "port"
}
export declare class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions extends SpeakeasyBase {
    /**
     * The type of definition. Can be one of 'application', 'applicationCategory', 'host', 'port', 'ipRange' or 'localNet'.
     */
    type: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;
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
export declare class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits extends SpeakeasyBase {
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
export declare class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits extends SpeakeasyBase {
    /**
     * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
     */
    bandwidthLimits?: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;
    /**
     * How bandwidth limits are applied by your rule. Can be one of 'network default', 'ignore' or 'custom'.
     */
    settings?: string;
}
export declare class UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules extends SpeakeasyBase {
    /**
     *     A list of objects describing the definitions of your traffic shaping rule. At least one definition is required.
     *
     * @remarks
     *
     */
    definitions: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions[];
    /**
     *     The DSCP tag applied by your rule. null means 'Do not change DSCP tag'.
     *
     * @remarks
     *     For a list of possible tag values, use the trafficShaping/dscpTaggingOptions endpoint.
     *
     */
    dscpTagValue?: number;
    /**
     *     An object describing the bandwidth settings for your rule.
     *
     * @remarks
     *
     */
    perClientBandwidthLimits?: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
    /**
     *     A string, indicating the priority level for packets bound to your rule.
     *
     * @remarks
     *     Can be 'low', 'normal' or 'high'.
     *
     */
    priority?: string;
}
export declare class UpdateNetworkApplianceTrafficShapingRulesRequestBody extends SpeakeasyBase {
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
    rules?: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules[];
}
export declare class UpdateNetworkApplianceTrafficShapingRulesRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkApplianceTrafficShapingRulesRequestBody;
    networkId: string;
}
export declare class UpdateNetworkApplianceTrafficShapingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceTrafficShapingRules200ApplicationJSONObject?: Record<string, any>;
}
