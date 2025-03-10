<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CloudSQLInstanceInfo - For display only. Metadata associated with a Cloud SQL instance.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CloudSQLInstanceInfo
{
    /**
     * Name of a Cloud SQL instance.
     * 
     * @var ?string $displayName
     */
	#[\JMS\Serializer\Annotation\SerializedName('displayName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $displayName = null;
    
    /**
     * External IP address of a Cloud SQL instance.
     * 
     * @var ?string $externalIp
     */
	#[\JMS\Serializer\Annotation\SerializedName('externalIp')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $externalIp = null;
    
    /**
     * Internal IP address of a Cloud SQL instance.
     * 
     * @var ?string $internalIp
     */
	#[\JMS\Serializer\Annotation\SerializedName('internalIp')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $internalIp = null;
    
    /**
     * URI of a Cloud SQL instance network or empty string if the instance does not have one.
     * 
     * @var ?string $networkUri
     */
	#[\JMS\Serializer\Annotation\SerializedName('networkUri')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $networkUri = null;
    
    /**
     * Region in which the Cloud SQL instance is running.
     * 
     * @var ?string $region
     */
	#[\JMS\Serializer\Annotation\SerializedName('region')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $region = null;
    
    /**
     * URI of a Cloud SQL instance.
     * 
     * @var ?string $uri
     */
	#[\JMS\Serializer\Annotation\SerializedName('uri')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $uri = null;
    
	public function __construct()
	{
		$this->displayName = null;
		$this->externalIp = null;
		$this->internalIp = null;
		$this->networkUri = null;
		$this->region = null;
		$this->uri = null;
	}
}
