<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class PatientResourceRelationships
{
	#[\JMS\Serializer\Annotation\SerializedName('coaches')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsCoaches')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PatientResourceRelationshipsCoaches $coaches = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('groups')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsGroups')]
    public PatientResourceRelationshipsGroups $groups;
    
	public function __construct()
	{
		$this->coaches = null;
		$this->groups = new \OpenAPI\OpenAPI\Models\Shared\PatientResourceRelationshipsGroups();
	}
}
