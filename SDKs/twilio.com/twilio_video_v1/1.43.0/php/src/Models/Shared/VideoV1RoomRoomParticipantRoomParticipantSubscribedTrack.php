<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack - OK
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack
{
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     * 
     * @var ?\DateTime $dateCreated
     */
	#[\JMS\Serializer\Annotation\SerializedName('date_created')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $dateCreated = null;
    
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     * 
     * @var ?\DateTime $dateUpdated
     */
	#[\JMS\Serializer\Annotation\SerializedName('date_updated')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $dateUpdated = null;
    
    /**
     * Whether the track is enabled.
     * 
     * @var ?bool $enabled
     */
	#[\JMS\Serializer\Annotation\SerializedName('enabled')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $enabled = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('kind')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\RoomParticipantSubscribedTrackEnumKindEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?RoomParticipantSubscribedTrackEnumKindEnum $kind = null;
    
    /**
     * The track name. Must have no more than 128 characters and be unique among the participant's published tracks.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * The SID of the participant that subscribes to the track.
     * 
     * @var ?string $participantSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('participant_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $participantSid = null;
    
    /**
     * The SID of the participant that publishes the track.
     * 
     * @var ?string $publisherSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('publisher_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $publisherSid = null;
    
    /**
     * The SID of the room where the track is published.
     * 
     * @var ?string $roomSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('room_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $roomSid = null;
    
    /**
     * The unique string that we created to identify the RoomParticipantSubscribedTrack resource.
     * 
     * @var ?string $sid
     */
	#[\JMS\Serializer\Annotation\SerializedName('sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sid = null;
    
    /**
     * The absolute URL of the resource.
     * 
     * @var ?string $url
     */
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $url = null;
    
	public function __construct()
	{
		$this->dateCreated = null;
		$this->dateUpdated = null;
		$this->enabled = null;
		$this->kind = null;
		$this->name = null;
		$this->participantSid = null;
		$this->publisherSid = null;
		$this->roomSid = null;
		$this->sid = null;
		$this->url = null;
	}
}
