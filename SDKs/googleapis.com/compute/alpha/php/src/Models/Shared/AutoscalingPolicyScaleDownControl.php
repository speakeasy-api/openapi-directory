<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * AutoscalingPolicyScaleDownControl - Configuration that allows for slower scale in so that even if Autoscaler recommends an abrupt scale in of a MIG, it will be throttled as specified by the parameters below.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class AutoscalingPolicyScaleDownControl
{
    /**
     * Encapsulates numeric value that can be either absolute or relative.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\FixedOrPercent $maxScaledDownReplicas
     */
	#[\JMS\Serializer\Annotation\SerializedName('maxScaledDownReplicas')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\FixedOrPercent')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?FixedOrPercent $maxScaledDownReplicas = null;
    
    /**
     * How far back autoscaling looks when computing recommendations to include directives regarding slower scale in, as described above.
     * 
     * @var ?int $timeWindowSec
     */
	#[\JMS\Serializer\Annotation\SerializedName('timeWindowSec')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $timeWindowSec = null;
    
	public function __construct()
	{
		$this->maxScaledDownReplicas = null;
		$this->timeWindowSec = null;
	}
}
