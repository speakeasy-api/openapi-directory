<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudMlV1SampledShapleyAttribution - An attribution method that approximates Shapley values for features that contribute to the label being predicted. A sampling strategy is used to approximate the value rather than considering all subsets of features.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudMlV1SampledShapleyAttribution
{
    /**
     * The number of feature permutations to consider when approximating the Shapley values.
     * 
     * @var ?int $numPaths
     */
	#[\JMS\Serializer\Annotation\SerializedName('numPaths')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $numPaths = null;
    
	public function __construct()
	{
		$this->numPaths = null;
	}
}
