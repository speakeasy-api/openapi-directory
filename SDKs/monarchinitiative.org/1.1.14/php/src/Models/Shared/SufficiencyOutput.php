<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * SufficiencyOutput - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class SufficiencyOutput
{
    /**
     * categorical score
     * 
     * @var ?float $categoricalScore
     */
	#[\JMS\Serializer\Annotation\SerializedName('categorical_score')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $categoricalScore = null;
    
    /**
     * scaled score
     * 
     * @var ?float $scaledScore
     */
	#[\JMS\Serializer\Annotation\SerializedName('scaled_score')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $scaledScore = null;
    
    /**
     * simple score
     * 
     * @var ?float $simpleScore
     */
	#[\JMS\Serializer\Annotation\SerializedName('simple_score')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $simpleScore = null;
    
	public function __construct()
	{
		$this->categoricalScore = null;
		$this->scaledScore = null;
		$this->simpleScore = null;
	}
}
