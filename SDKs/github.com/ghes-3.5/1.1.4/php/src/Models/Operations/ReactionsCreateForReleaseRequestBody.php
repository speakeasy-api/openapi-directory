<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ReactionsCreateForReleaseRequestBody
{
    /**
     * The [reaction type](https://docs.github.com/enterprise-server@3.5/rest/reference/reactions#reaction-types) to add to the release.
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForReleaseRequestBodyContentEnum $content
     */
	#[\JMS\Serializer\Annotation\SerializedName('content')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForReleaseRequestBodyContentEnum>')]
    public ReactionsCreateForReleaseRequestBodyContentEnum $content;
    
	public function __construct()
	{
		$this->content = \OpenAPI\OpenAPI\Models\Operations\ReactionsCreateForReleaseRequestBodyContentEnum::PLUS1;
	}
}
