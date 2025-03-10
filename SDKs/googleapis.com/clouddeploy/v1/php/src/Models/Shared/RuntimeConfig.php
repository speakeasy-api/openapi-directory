<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * RuntimeConfig - RuntimeConfig contains the runtime specific configurations for a deployment strategy.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class RuntimeConfig
{
    /**
     * CloudRunConfig contains the Cloud Run runtime configuration.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CloudRunConfig $cloudRun
     */
	#[\JMS\Serializer\Annotation\SerializedName('cloudRun')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CloudRunConfig')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CloudRunConfig $cloudRun = null;
    
    /**
     * KubernetesConfig contains the Kubernetes runtime configuration.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\KubernetesConfig $kubernetes
     */
	#[\JMS\Serializer\Annotation\SerializedName('kubernetes')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\KubernetesConfig')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?KubernetesConfig $kubernetes = null;
    
	public function __construct()
	{
		$this->cloudRun = null;
		$this->kubernetes = null;
	}
}
