<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * AdmissionWhitelistPattern - An admission allowlist pattern exempts images from checks by admission rules.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class AdmissionWhitelistPattern
{
    /**
     * An image name pattern to allowlist, in the form `registry/path/to/image`. This supports a trailing `*` wildcard, but this is allowed only in text after the `registry/` part. This also supports a trailing `**` wildcard which matches subdirectories of a given entry.
     * 
     * @var ?string $namePattern
     */
	#[\JMS\Serializer\Annotation\SerializedName('namePattern')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $namePattern = null;
    
	public function __construct()
	{
		$this->namePattern = null;
	}
}
