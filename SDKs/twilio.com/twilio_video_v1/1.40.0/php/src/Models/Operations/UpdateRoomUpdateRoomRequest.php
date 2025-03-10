<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class UpdateRoomUpdateRoomRequest
{
	#[SpeakeasyMetadata('form:name=Status')]
    public \OpenAPI\OpenAPI\Models\Shared\RoomEnumRoomStatusEnum $status;
    
	public function __construct()
	{
		$this->status = \OpenAPI\OpenAPI\Models\Shared\RoomEnumRoomStatusEnum::IN_PROGRESS;
	}
}
