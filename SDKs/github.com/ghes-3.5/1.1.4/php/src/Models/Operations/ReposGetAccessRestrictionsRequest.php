<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ReposGetAccessRestrictionsRequest
{
    /**
     * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/enterprise-server@3.5/graphql).
     * 
     * @var string $branch
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=branch')]
    public string $branch;
    
    /**
     * The account owner of the repository. The name is not case sensitive.
     * 
     * @var string $owner
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=owner')]
    public string $owner;
    
    /**
     * The name of the repository. The name is not case sensitive.
     * 
     * @var string $repo
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=repo')]
    public string $repo;
    
	public function __construct()
	{
		$this->branch = "";
		$this->owner = "";
		$this->repo = "";
	}
}
