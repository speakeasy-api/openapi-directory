<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Tag - Represents a Google Tag Manager Tag.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Tag
{
    /**
     * GTM Account ID.
     * 
     * @var ?string $accountId
     */
	#[\JMS\Serializer\Annotation\SerializedName('accountId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $accountId = null;
    
    /**
     * Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update
     * 
     * @var ?array<string> $blockingRuleId
     */
	#[\JMS\Serializer\Annotation\SerializedName('blockingRuleId')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $blockingRuleId = null;
    
    /**
     * Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update
     * 
     * @var ?array<string> $blockingTriggerId
     */
	#[\JMS\Serializer\Annotation\SerializedName('blockingTriggerId')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $blockingTriggerId = null;
    
    /**
     * GTM Container ID.
     * 
     * @var ?string $containerId
     */
	#[\JMS\Serializer\Annotation\SerializedName('containerId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $containerId = null;
    
    /**
     * The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified.
     * 
     * @var ?string $fingerprint
     */
	#[\JMS\Serializer\Annotation\SerializedName('fingerprint')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $fingerprint = null;
    
    /**
     * Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified) are false. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update
     * 
     * @var ?array<string> $firingRuleId
     */
	#[\JMS\Serializer\Annotation\SerializedName('firingRuleId')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $firingRuleId = null;
    
    /**
     * Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update
     * 
     * @var ?array<string> $firingTriggerId
     */
	#[\JMS\Serializer\Annotation\SerializedName('firingTriggerId')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $firingTriggerId = null;
    
    /**
     * If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode). @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update
     * 
     * @var ?bool $liveOnly
     */
	#[\JMS\Serializer\Annotation\SerializedName('liveOnly')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $liveOnly = null;
    
    /**
     * Tag display name. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update
     * 
     * @var ?string $notes
     */
	#[\JMS\Serializer\Annotation\SerializedName('notes')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $notes = null;
    
    /**
     * The tag's parameters. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Parameter> $parameter
     */
	#[\JMS\Serializer\Annotation\SerializedName('parameter')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Parameter>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $parameter = null;
    
    /**
     * Parent folder id.
     * 
     * @var ?string $parentFolderId
     */
	#[\JMS\Serializer\Annotation\SerializedName('parentFolderId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $parentFolderId = null;
    
    /**
     * True if the tag is paused. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update
     * 
     * @var ?bool $paused
     */
	#[\JMS\Serializer\Annotation\SerializedName('paused')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $paused = null;
    
    /**
     * Represents a Google Tag Manager Parameter.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Parameter $priority
     */
	#[\JMS\Serializer\Annotation\SerializedName('priority')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Parameter')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Parameter $priority = null;
    
    /**
     * The end timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update
     * 
     * @var ?string $scheduleEndMs
     */
	#[\JMS\Serializer\Annotation\SerializedName('scheduleEndMs')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $scheduleEndMs = null;
    
    /**
     * The start timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update
     * 
     * @var ?string $scheduleStartMs
     */
	#[\JMS\Serializer\Annotation\SerializedName('scheduleStartMs')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $scheduleStartMs = null;
    
    /**
     * The list of setup tags. Currently we only allow one.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\SetupTag> $setupTag
     */
	#[\JMS\Serializer\Annotation\SerializedName('setupTag')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\SetupTag>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $setupTag = null;
    
    /**
     * Option to fire this tag.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\TagTagFiringOptionEnum $tagFiringOption
     */
	#[\JMS\Serializer\Annotation\SerializedName('tagFiringOption')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\TagTagFiringOptionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?TagTagFiringOptionEnum $tagFiringOption = null;
    
    /**
     * The Tag ID uniquely identifies the GTM Tag.
     * 
     * @var ?string $tagId
     */
	#[\JMS\Serializer\Annotation\SerializedName('tagId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $tagId = null;
    
    /**
     * The list of teardown tags. Currently we only allow one.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\TeardownTag> $teardownTag
     */
	#[\JMS\Serializer\Annotation\SerializedName('teardownTag')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\TeardownTag>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $teardownTag = null;
    
    /**
     * GTM Tag Type. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update
     * 
     * @var ?string $type
     */
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $type = null;
    
	public function __construct()
	{
		$this->accountId = null;
		$this->blockingRuleId = null;
		$this->blockingTriggerId = null;
		$this->containerId = null;
		$this->fingerprint = null;
		$this->firingRuleId = null;
		$this->firingTriggerId = null;
		$this->liveOnly = null;
		$this->name = null;
		$this->notes = null;
		$this->parameter = null;
		$this->parentFolderId = null;
		$this->paused = null;
		$this->priority = null;
		$this->scheduleEndMs = null;
		$this->scheduleStartMs = null;
		$this->setupTag = null;
		$this->tagFiringOption = null;
		$this->tagId = null;
		$this->teardownTag = null;
		$this->type = null;
	}
}
