<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * MultiCloudCluster - MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class MultiCloudCluster
{
    /**
     * Output only. If cluster_missing is set then it denotes that API(gkemulticloud.googleapis.com) resource for this GKE Multi-Cloud cluster no longer exists.
     * 
     * @var ?bool $clusterMissing
     */
	#[\JMS\Serializer\Annotation\SerializedName('clusterMissing')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $clusterMissing = null;
    
    /**
     * Immutable. Self-link of the Google Cloud resource for the GKE Multi-Cloud cluster. For example: //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/awsClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/azureClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/attachedClusters/my-cluster
     * 
     * @var ?string $resourceLink
     */
	#[\JMS\Serializer\Annotation\SerializedName('resourceLink')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $resourceLink = null;
    
	public function __construct()
	{
		$this->clusterMissing = null;
		$this->resourceLink = null;
	}
}
