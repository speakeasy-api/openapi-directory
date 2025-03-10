<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GistComment - A comment made to a gist.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GistComment
{
    /**
     * How the author is associated with the repository.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\AuthorAssociationEnum $authorAssociation
     */
	#[\JMS\Serializer\Annotation\SerializedName('author_association')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\AuthorAssociationEnum>')]
    public AuthorAssociationEnum $authorAssociation;
    
    /**
     * The comment text.
     * 
     * @var string $body
     */
	#[\JMS\Serializer\Annotation\SerializedName('body')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $body;
    
	#[\JMS\Serializer\Annotation\SerializedName('created_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $createdAt;
    
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $id;
    
	#[\JMS\Serializer\Annotation\SerializedName('node_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $nodeId;
    
	#[\JMS\Serializer\Annotation\SerializedName('updated_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $updatedAt;
    
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $url;
    
    /**
     * A GitHub user.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\NullableSimpleUser $user
     */
	#[\JMS\Serializer\Annotation\SerializedName('user')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\NullableSimpleUser')]
    public NullableSimpleUser $user;
    
	public function __construct()
	{
		$this->authorAssociation = \OpenAPI\OpenAPI\Models\Shared\AuthorAssociationEnum::COLLABORATOR;
		$this->body = "";
		$this->createdAt = new \DateTime();
		$this->id = 0;
		$this->nodeId = "";
		$this->updatedAt = new \DateTime();
		$this->url = "";
		$this->user = new \OpenAPI\OpenAPI\Models\Shared\NullableSimpleUser();
	}
}
