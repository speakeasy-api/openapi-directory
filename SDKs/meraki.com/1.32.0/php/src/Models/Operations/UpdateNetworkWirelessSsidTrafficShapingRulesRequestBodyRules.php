<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules
{
    /**
     *     A list of objects describing the definitions of your traffic shaping rule. At least one definition is required.
     * 
     * 
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions> $definitions
     */
	#[\JMS\Serializer\Annotation\SerializedName('definitions')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions>')]
    public array $definitions;
    
    /**
     *     The DSCP tag applied by your rule. null means 'Do not change DSCP tag'.
     * 
     *     For a list of possible tag values, use the trafficShaping/dscpTaggingOptions endpoint.
     * 
     * 
     * @var ?int $dscpTagValue
     */
	#[\JMS\Serializer\Annotation\SerializedName('dscpTagValue')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $dscpTagValue = null;
    
    /**
     *     The PCP tag applied by your rule. Can be 0 (lowest priority) through 7 (highest priority).
     * 
     *     null means 'Do not set PCP tag'.
     * 
     * 
     * @var ?int $pcpTagValue
     */
	#[\JMS\Serializer\Annotation\SerializedName('pcpTagValue')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $pcpTagValue = null;
    
    /**
     *     An object describing the bandwidth settings for your rule.
     * 
     * 
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits $perClientBandwidthLimits
     */
	#[\JMS\Serializer\Annotation\SerializedName('perClientBandwidthLimits')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits $perClientBandwidthLimits = null;
    
	public function __construct()
	{
		$this->definitions = [];
		$this->dscpTagValue = null;
		$this->pcpTagValue = null;
		$this->perClientBandwidthLimits = null;
	}
}
