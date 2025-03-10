<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * App - An app
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class App
{
    /**
     * A custom defined list of access requirements
     * 
     * @var ?array<string> $access
     */
	
    public ?array $access = null;
    
    /**
     * Resticts users from accessing this app
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\Restrictions $allow
     */
	
    public Restrictions $allow;
    
    /**
     * The id of this app
     * 
     * @var string $appId
     */
	
    public string $appId;
    
    /**
     * A custom defined list of app attributes
     * 
     * @var array<string, mixed> $attributes
     */
	
    public array $attributes;
    
    /**
     * The date (in millis) that this app was created
     * 
     * @var int $created
     */
	
    public int $created;
    
    /**
     * A custom JSON object that you can create and attach to this record
     * 
     * @var array<string, mixed> $customData
     */
	
    public array $customData;
    
    /**
     * The id of the developer that owns this app
     * 
     * @var string $developerId
     */
	
    public string $developerId;
    
    /**
     * True if this is the live version of the app
     * 
     * @var bool $isLive
     */
	
    public bool $isLive;
    
    /**
     * The date (in millis) that this app was last modified
     * 
     * @var int $lastUpdated
     */
	
    public int $lastUpdated;
    
    /**
     * The models that describes the cost and pricing for this app
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\Model> $model
     */
	
    public array $model;
    
    /**
     * The name of this app
     * 
     * @var string $name
     */
	
    public string $name;
    
	
    public ?Ownership $ownership = null;
    
    /**
     * A random number that changes hourly and is used for achieving a random sort order when displaying apps
     * 
     * @var int $randomize
     */
	
    public int $randomize;
    
    /**
     * The average review rating for this app. Reviews are rated from 100 (one star) to 500 (five star)
     * 
     * @var int $rating
     */
	
    public int $rating;
    
    /**
     * Resticts users from accessing this app
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\Restrictions $restrict
     */
	
    public Restrictions $restrict;
    
    /**
     * The number of approved reviews for this app.
     * 
     * @var ?int $reviewCount
     */
	
    public ?int $reviewCount = null;
    
    /**
     * URL safe aliases that can be used to identify this app even after name changes. The current alias is always at position 0.
     * 
     * @var array<string> $safeName
     */
	
    public array $safeName;
    
    /**
     * A field containing summary stats about the app and is specially designed to allow apps to be sorted by popularity
     * 
     * @var ?array<string, mixed> $statistics
     */
	
    public ?array $statistics = null;
    
    /**
     * The current status of this review
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\Status $status
     */
	
    public Status $status;
    
    /**
     * The date (in millis) that this app was submitted for approval
     * 
     * @var ?int $submittedDate
     */
	
    public ?int $submittedDate = null;
    
    /**
     * The type for this app
     * 
     * @var ?string $type
     */
	
    public ?string $type = null;
    
    /**
     * The version number for this app
     * 
     * @var int $version
     */
	
    public int $version;
    
	public function __construct()
	{
		$this->access = null;
		$this->allow = new \OpenAPI\OpenAPI\Models\Shared\Restrictions();
		$this->appId = "";
		$this->attributes = [];
		$this->created = 0;
		$this->customData = [];
		$this->developerId = "";
		$this->isLive = false;
		$this->lastUpdated = 0;
		$this->model = [];
		$this->name = "";
		$this->ownership = null;
		$this->randomize = 0;
		$this->rating = 0;
		$this->restrict = new \OpenAPI\OpenAPI\Models\Shared\Restrictions();
		$this->reviewCount = null;
		$this->safeName = [];
		$this->statistics = null;
		$this->status = new \OpenAPI\OpenAPI\Models\Shared\Status();
		$this->submittedDate = null;
		$this->type = null;
		$this->version = 0;
	}
}
