<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class CommitParents
{
	#[\JMS\Serializer\Annotation\SerializedName('html_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $htmlUrl = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('sha')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $sha;
    
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $url;
    
	public function __construct()
	{
		$this->htmlUrl = null;
		$this->sha = "";
		$this->url = "";
	}
}
