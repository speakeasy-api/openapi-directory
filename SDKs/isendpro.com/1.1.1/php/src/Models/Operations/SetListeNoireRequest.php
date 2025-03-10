<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class SetListeNoireRequest
{
    /**
     * Clé API
     * 
     * @var string $keyid
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=keyid')]
    public string $keyid;
    
    /**
     * numéro de mobile à insérer en liste noire
     * 
     * @var string $num
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=num')]
    public string $num;
    
    /**
     * Doit valoir "1"
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\SetListeNoireSetlisteNoireEnum $setlisteNoire
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=setlisteNoire')]
    public SetListeNoireSetlisteNoireEnum $setlisteNoire;
    
	public function __construct()
	{
		$this->keyid = "";
		$this->num = "";
		$this->setlisteNoire = \OpenAPI\OpenAPI\Models\Operations\SetListeNoireSetlisteNoireEnum::ONE;
	}
}
