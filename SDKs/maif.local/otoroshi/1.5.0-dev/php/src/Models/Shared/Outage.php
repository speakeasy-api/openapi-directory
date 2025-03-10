<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Outage - An outage by the Snow Monkey on a service
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Outage
{
    /**
     * The service impacted by outage
     * 
     * @var string $descriptorId
     */
	#[\JMS\Serializer\Annotation\SerializedName('descriptorId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $descriptorId;
    
    /**
     * The name of service impacted by outage
     * 
     * @var string $descriptorName
     */
	#[\JMS\Serializer\Annotation\SerializedName('descriptorName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $descriptorName;
    
    /**
     * The duration of the outage
     * 
     * @var int $duration
     */
	#[\JMS\Serializer\Annotation\SerializedName('duration')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $duration;
    
    /**
     * The end of the outage
     * 
     * @var string $until
     */
	#[\JMS\Serializer\Annotation\SerializedName('until')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $until;
    
	public function __construct()
	{
		$this->descriptorId = "";
		$this->descriptorName = "";
		$this->duration = 0;
		$this->until = "";
	}
}
