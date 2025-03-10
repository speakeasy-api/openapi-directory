<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * ListSyncMapPermissionListSyncMapPermissionResponse - OK
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class ListSyncMapPermissionListSyncMapPermissionResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('meta')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\ListSyncMapPermissionListSyncMapPermissionResponseMeta')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ListSyncMapPermissionListSyncMapPermissionResponseMeta $meta = null;
    
    /**
     * $permissions
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\SyncV1ServiceSyncMapSyncMapPermission> $permissions
     */
	#[\JMS\Serializer\Annotation\SerializedName('permissions')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\SyncV1ServiceSyncMapSyncMapPermission>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $permissions = null;
    
	public function __construct()
	{
		$this->meta = null;
		$this->permissions = null;
	}
}
