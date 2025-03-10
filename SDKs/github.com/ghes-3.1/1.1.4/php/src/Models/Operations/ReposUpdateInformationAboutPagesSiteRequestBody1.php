<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ReposUpdateInformationAboutPagesSiteRequestBody1
{
    /**
     * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/articles/using-a-custom-domain-with-github-pages/)."
     * 
     * @var ?string $cname
     */
	#[\JMS\Serializer\Annotation\SerializedName('cname')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $cname = null;
    
    /**
     * Specify whether HTTPS should be enforced for the repository.
     * 
     * @var ?bool $httpsEnforced
     */
	#[\JMS\Serializer\Annotation\SerializedName('https_enforced')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $httpsEnforced = null;
    
    /**
     * Configures access controls for the GitHub Pages site. If public is set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site. This includes anyone in your Enterprise if the repository is set to `internal` visibility. This feature is only available to repositories in an organization on an Enterprise plan.
     * 
     * @var ?bool $public
     */
	#[\JMS\Serializer\Annotation\SerializedName('public')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $public = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('source')]
    #[\JMS\Serializer\Annotation\Type('mixed')]
    public mixed $source;
    
	public function __construct()
	{
		$this->cname = null;
		$this->httpsEnforced = null;
		$this->public = null;
		$this->source = null;
	}
}
