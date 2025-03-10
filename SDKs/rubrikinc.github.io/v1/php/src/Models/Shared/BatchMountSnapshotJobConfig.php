<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * BatchMountSnapshotJobConfig - Configuration object containing an array of virtual machine IDs, a way to indicate the snapshot to be chosen and mount configs.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class BatchMountSnapshotJobConfig
{
    /**
     * Array of objects containing information about snapshots to mount.
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\MountSnapshotJobConfigForBatchV1> $snapshots
     */
	#[\JMS\Serializer\Annotation\SerializedName('snapshots')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\MountSnapshotJobConfigForBatchV1>')]
    public array $snapshots;
    
	public function __construct()
	{
		$this->snapshots = [];
	}
}
