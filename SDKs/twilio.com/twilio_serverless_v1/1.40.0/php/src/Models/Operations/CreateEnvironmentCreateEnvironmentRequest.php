<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class CreateEnvironmentCreateEnvironmentRequest
{
    /**
     * A URL-friendly name that represents the environment and forms part of the domain name. It can be a maximum of 16 characters.
     * 
     * @var ?string $domainSuffix
     */
	#[SpeakeasyMetadata('form:name=DomainSuffix')]
    public ?string $domainSuffix = null;
    
    /**
     * A user-defined string that uniquely identifies the Environment resource. It can be a maximum of 100 characters.
     * 
     * @var string $uniqueName
     */
	#[SpeakeasyMetadata('form:name=UniqueName')]
    public string $uniqueName;
    
	public function __construct()
	{
		$this->domainSuffix = null;
		$this->uniqueName = "";
	}
}
