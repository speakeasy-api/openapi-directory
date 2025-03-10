<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ShortBranch - Short Branch
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ShortBranch
{
	#[\JMS\Serializer\Annotation\SerializedName('commit')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ShortBranchCommit')]
    public ShortBranchCommit $commit;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
	#[\JMS\Serializer\Annotation\SerializedName('protected')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    public bool $protected;
    
    /**
     * Branch Protection
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\BranchProtection $protection
     */
	#[\JMS\Serializer\Annotation\SerializedName('protection')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\BranchProtection')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?BranchProtection $protection = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('protection_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $protectionUrl = null;
    
	public function __construct()
	{
		$this->commit = new \OpenAPI\OpenAPI\Models\Shared\ShortBranchCommit();
		$this->name = "";
		$this->protected = false;
		$this->protection = null;
		$this->protectionUrl = null;
	}
}
