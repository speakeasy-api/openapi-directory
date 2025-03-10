<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Database - Represents a SQL database on the Cloud SQL instance.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Database
{
    /**
     * The Cloud SQL charset value.
     * 
     * @var ?string $charset
     */
	#[\JMS\Serializer\Annotation\SerializedName('charset')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $charset = null;
    
    /**
     * The Cloud SQL collation value.
     * 
     * @var ?string $collation
     */
	#[\JMS\Serializer\Annotation\SerializedName('collation')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $collation = null;
    
    /**
     * This field is deprecated and will be removed from a future version of the API.
     * 
     * @var ?string $etag
     */
	#[\JMS\Serializer\Annotation\SerializedName('etag')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $etag = null;
    
    /**
     * The name of the Cloud SQL instance. This does not include the project ID.
     * 
     * @var ?string $instance
     */
	#[\JMS\Serializer\Annotation\SerializedName('instance')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $instance = null;
    
    /**
     * This is always `sql#database`.
     * 
     * @var ?string $kind
     */
	#[\JMS\Serializer\Annotation\SerializedName('kind')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kind = null;
    
    /**
     * The name of the database in the Cloud SQL instance. This does not include the project ID or instance name.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable.
     * 
     * @var ?string $project
     */
	#[\JMS\Serializer\Annotation\SerializedName('project')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $project = null;
    
    /**
     * The URI of this resource.
     * 
     * @var ?string $selfLink
     */
	#[\JMS\Serializer\Annotation\SerializedName('selfLink')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $selfLink = null;
    
    /**
     * Represents a Sql Server database on the Cloud SQL instance.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\SqlServerDatabaseDetails $sqlserverDatabaseDetails
     */
	#[\JMS\Serializer\Annotation\SerializedName('sqlserverDatabaseDetails')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\SqlServerDatabaseDetails')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?SqlServerDatabaseDetails $sqlserverDatabaseDetails = null;
    
	public function __construct()
	{
		$this->charset = null;
		$this->collation = null;
		$this->etag = null;
		$this->instance = null;
		$this->kind = null;
		$this->name = null;
		$this->project = null;
		$this->selfLink = null;
		$this->sqlserverDatabaseDetails = null;
	}
}
