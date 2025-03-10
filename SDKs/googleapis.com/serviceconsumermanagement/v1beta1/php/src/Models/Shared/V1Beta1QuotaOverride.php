<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * V1Beta1QuotaOverride - A quota override
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class V1Beta1QuotaOverride
{
    /**
     * The resource name of the ancestor that requested the override. For example: "organizations/12345" or "folders/67890". Used by admin overrides only.
     * 
     * @var ?string $adminOverrideAncestor
     */
	#[\JMS\Serializer\Annotation\SerializedName('adminOverrideAncestor')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $adminOverrideAncestor = null;
    
    /**
     *  If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit. For example, an override on a limit with the unit 1/{project}/{region} could contain an entry with the key "region" and the value "us-east-1"; the override is only applied to quota consumed in that region. This map has the following restrictions: * Keys that are not defined in the limit's unit are not valid keys. Any string appearing in {brackets} in the unit (besides {project} or {user}) is a defined key. * "project" is not a valid key; the project is already specified in the parent resource name. * "user" is not a valid key; the API does not support quota overrides that apply only to a specific user. * If "region" appears as a key, its value must be a valid Cloud region. * If "zone" appears as a key, its value must be a valid Cloud zone. * If any valid key other than "region" or "zone" appears in the map, then all valid keys other than "region" or "zone" must also appear in the map.
     * 
     * @var ?array<string, string> $dimensions
     */
	#[\JMS\Serializer\Annotation\SerializedName('dimensions')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $dimensions = null;
    
    /**
     * The name of the metric to which this override applies. An example name would be: `compute.googleapis.com/cpus`
     * 
     * @var ?string $metric
     */
	#[\JMS\Serializer\Annotation\SerializedName('metric')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $metric = null;
    
    /**
     * The resource name of the producer override. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d`
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).
     * 
     * @var ?string $overrideValue
     */
	#[\JMS\Serializer\Annotation\SerializedName('overrideValue')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $overrideValue = null;
    
    /**
     * The limit unit of the limit to which this override applies. An example unit would be: `1/{project}/{region}` Note that `{project}` and `{region}` are not placeholders in this example; the literal characters `{` and `}` occur in the string.
     * 
     * @var ?string $unit
     */
	#[\JMS\Serializer\Annotation\SerializedName('unit')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $unit = null;
    
	public function __construct()
	{
		$this->adminOverrideAncestor = null;
		$this->dimensions = null;
		$this->metric = null;
		$this->name = null;
		$this->overrideValue = null;
		$this->unit = null;
	}
}
