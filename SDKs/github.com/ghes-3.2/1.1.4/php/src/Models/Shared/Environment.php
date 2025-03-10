<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Environment - Details of a deployment environment
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Environment
{
    /**
     * The time that the environment was created, in ISO 8601 format.
     * 
     * @var \DateTime $createdAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('created_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $createdAt;
    
    /**
     * The type of deployment branch policy for this environment. To allow all branches to deploy, set to `null`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DeploymentBranchPolicySettings $deploymentBranchPolicy
     */
	#[\JMS\Serializer\Annotation\SerializedName('deployment_branch_policy')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DeploymentBranchPolicySettings')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DeploymentBranchPolicySettings $deploymentBranchPolicy = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('html_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $htmlUrl;
    
    /**
     * The id of the environment.
     * 
     * @var int $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $id;
    
    /**
     * The name of the environment.
     * 
     * @var string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
	#[\JMS\Serializer\Annotation\SerializedName('node_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $nodeId;
    
    /**
     * $protectionRules
     * 
     * @var ?array<mixed> $protectionRules
     */
	#[\JMS\Serializer\Annotation\SerializedName('protection_rules')]
    #[\JMS\Serializer\Annotation\Type('array<mixed>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $protectionRules = null;
    
    /**
     * The time that the environment was last updated, in ISO 8601 format.
     * 
     * @var \DateTime $updatedAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('updated_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $updatedAt;
    
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $url;
    
	public function __construct()
	{
		$this->createdAt = new \DateTime();
		$this->deploymentBranchPolicy = null;
		$this->htmlUrl = "";
		$this->id = 0;
		$this->name = "";
		$this->nodeId = "";
		$this->protectionRules = null;
		$this->updatedAt = new \DateTime();
		$this->url = "";
	}
}
