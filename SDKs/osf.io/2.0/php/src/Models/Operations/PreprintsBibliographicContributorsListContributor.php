<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PreprintsBibliographicContributorsListContributor
{
    /**
     * The properties of the contributor entity.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\PreprintsBibliographicContributorsListContributorAttributes $attributes
     */
	
    public ?PreprintsBibliographicContributorsListContributorAttributes $attributes = null;
    
    /**
     * The identifier of the contributor entity. Contributor identifiers have the form {preprint_id}-{user_id}.
     * 
     * @var ?string $id
     */
	
    public ?string $id = null;
    
    /**
     * URLs to alternative representations of the contributor entity.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\PreprintsBibliographicContributorsListContributorLinks $links
     */
	
    public ?PreprintsBibliographicContributorsListContributorLinks $links = null;
    
    /**
     * URLs to other entities or entity collections that have a relationship to the contributor entity.
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\PreprintsBibliographicContributorsListContributorRelationships $relationships
     */
	
    public PreprintsBibliographicContributorsListContributorRelationships $relationships;
    
    /**
     * The type identifier of the contributor entity (`contributors`).
     * 
     * @var string $type
     */
	
    public string $type;
    
	public function __construct()
	{
		$this->attributes = null;
		$this->id = null;
		$this->links = null;
		$this->relationships = new \OpenAPI\OpenAPI\Models\Operations\PreprintsBibliographicContributorsListContributorRelationships();
		$this->type = "";
	}
}
