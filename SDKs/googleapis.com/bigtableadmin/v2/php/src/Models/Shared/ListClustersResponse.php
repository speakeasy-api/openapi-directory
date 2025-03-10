<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListClustersResponse - Response message for BigtableInstanceAdmin.ListClusters.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListClustersResponse
{
    /**
     * The list of requested clusters.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Cluster> $clusters
     */
	#[\JMS\Serializer\Annotation\SerializedName('clusters')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Cluster>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $clusters = null;
    
    /**
     * Locations from which Cluster information could not be retrieved, due to an outage or some other transient condition. Clusters from these locations may be missing from `clusters`, or may only have partial information returned. Values are of the form `projects//locations/`
     * 
     * @var ?array<string> $failedLocations
     */
	#[\JMS\Serializer\Annotation\SerializedName('failedLocations')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $failedLocations = null;
    
    /**
     * DEPRECATED: This field is unused and ignored.
     * 
     * @var ?string $nextPageToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('nextPageToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextPageToken = null;
    
	public function __construct()
	{
		$this->clusters = null;
		$this->failedLocations = null;
		$this->nextPageToken = null;
	}
}
