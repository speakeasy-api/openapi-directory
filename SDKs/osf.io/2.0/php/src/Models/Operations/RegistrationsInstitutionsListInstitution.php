<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class RegistrationsInstitutionsListInstitution
{
    /**
     * The properties of the institution entity.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\RegistrationsInstitutionsListInstitutionAttributes $attributes
     */
	
    public ?RegistrationsInstitutionsListInstitutionAttributes $attributes = null;
    
    /**
     * The identifier of the institution entity.
     * 
     * @var ?string $id
     */
	
    public ?string $id = null;
    
    /**
     * URLs to alternative representations of the institutions entity.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\RegistrationsInstitutionsListInstitutionLinks $links
     */
	
    public ?RegistrationsInstitutionsListInstitutionLinks $links = null;
    
    /**
     * URLs to other entities or entity collections that have a relationship to the institution entity.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\RegistrationsInstitutionsListInstitutionRelationships $relationships
     */
	
    public ?RegistrationsInstitutionsListInstitutionRelationships $relationships = null;
    
    /**
     * The type identifier of the institution entity (`institutions`).
     * 
     * @var ?string $type
     */
	
    public ?string $type = null;
    
	public function __construct()
	{
		$this->attributes = null;
		$this->id = null;
		$this->links = null;
		$this->relationships = null;
		$this->type = null;
	}
}
