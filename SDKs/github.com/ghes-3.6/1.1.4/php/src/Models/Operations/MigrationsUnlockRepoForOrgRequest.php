<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class MigrationsUnlockRepoForOrgRequest
{
    /**
     * The unique identifier of the migration.
     * 
     * @var int $migrationId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=migration_id')]
    public int $migrationId;
    
    /**
     * The organization name. The name is not case sensitive.
     * 
     * @var string $org
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=org')]
    public string $org;
    
    /**
     * repo_name parameter
     * 
     * @var string $repoName
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=repo_name')]
    public string $repoName;
    
	public function __construct()
	{
		$this->migrationId = 0;
		$this->org = "";
		$this->repoName = "";
	}
}
