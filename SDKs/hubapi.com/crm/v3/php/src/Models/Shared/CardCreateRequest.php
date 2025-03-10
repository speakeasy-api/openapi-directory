<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CardCreateRequest - State of card definition to be created
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CardCreateRequest
{
    /**
     * Configuration for custom user actions on cards.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\CardActions $actions
     */
	#[\JMS\Serializer\Annotation\SerializedName('actions')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CardActions')]
    public CardActions $actions;
    
    /**
     * Configuration for displayed info on a card
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\CardDisplayBody $display
     */
	#[\JMS\Serializer\Annotation\SerializedName('display')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CardDisplayBody')]
    public CardDisplayBody $display;
    
    /**
     * Configuration for this card's data fetch request.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\CardFetchBody $fetch
     */
	#[\JMS\Serializer\Annotation\SerializedName('fetch')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CardFetchBody')]
    public CardFetchBody $fetch;
    
    /**
     * The top-level title for this card. Displayed to users in the CRM UI.
     * 
     * @var string $title
     */
	#[\JMS\Serializer\Annotation\SerializedName('title')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $title;
    
	public function __construct()
	{
		$this->actions = new \OpenAPI\OpenAPI\Models\Shared\CardActions();
		$this->display = new \OpenAPI\OpenAPI\Models\Shared\CardDisplayBody();
		$this->fetch = new \OpenAPI\OpenAPI\Models\Shared\CardFetchBody();
		$this->title = "";
	}
}
