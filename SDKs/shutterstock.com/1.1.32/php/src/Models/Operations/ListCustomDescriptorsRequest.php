<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ListCustomDescriptorsRequest
{
    /**
     * Show descriptors that contain the specified band (case-sentsitive)
     * 
     * @var ?string $bandId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=band_id')]
    public ?string $bandId = null;
    
    /**
     * Show descriptors with the specified band name (case-sensitive)
     * 
     * @var ?string $bandName
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=band_name')]
    public ?string $bandName = null;
    
    /**
     * Show descriptors with the specified IDs (case-sensitive)
     * 
     * @var ?array<string> $id
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=id')]
    public ?array $id = null;
    
    /**
     * Show descriptors with the specified instrument ID (case-sensitive)
     * 
     * @var ?string $instrumentId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=instrument_id')]
    public ?string $instrumentId = null;
    
    /**
     * Show descriptors with the specified instrument name (case-sensitive)
     * 
     * @var ?string $instrumentName
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=instrument_name')]
    public ?string $instrumentName = null;
    
    /**
     * Show descriptors with the specified name (case-sensitive)
     * 
     * @var ?string $name
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=name')]
    public ?string $name = null;
    
    /**
     * Page number
     * 
     * @var ?int $page
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=page')]
    public ?int $page = null;
    
    /**
     * Number of results per page
     * 
     * @var ?int $perPage
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=per_page')]
    public ?int $perPage = null;
    
    /**
     * Show descriptors with an average render speed that is greater than or equal to the specified value
     * 
     * @var ?float $renderSpeedOver
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=render_speed_over')]
    public ?float $renderSpeedOver = null;
    
    /**
     * Show descriptors with the specified tag, such as Cinematic or Roomy (case-sensitive)
     * 
     * @var ?string $tag
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=tag')]
    public ?string $tag = null;
    
    /**
     * Show descriptors whose tempo range includes the specified tempo in beats per minute
     * 
     * @var ?float $tempo
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=tempo')]
    public ?float $tempo = null;
    
    /**
     * Show descriptors that have a tempo range that includes the specified tempo in beats per minute
     * 
     * @var ?float $tempoFrom
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=tempo_from')]
    public ?float $tempoFrom = null;
    
    /**
     * Show descriptors with a tempo that is less than or equal to the specified number
     * 
     * @var ?float $tempoTo
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=tempo_to')]
    public ?float $tempoTo = null;
    
	public function __construct()
	{
		$this->bandId = null;
		$this->bandName = null;
		$this->id = null;
		$this->instrumentId = null;
		$this->instrumentName = null;
		$this->name = null;
		$this->page = null;
		$this->perPage = null;
		$this->renderSpeedOver = null;
		$this->tag = null;
		$this->tempo = null;
		$this->tempoFrom = null;
		$this->tempoTo = null;
	}
}
