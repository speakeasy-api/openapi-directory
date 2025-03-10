<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * MysqlDatabase - MySQL database.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class MysqlDatabase
{
    /**
     * Database name.
     * 
     * @var ?string $databaseName
     */
	#[\JMS\Serializer\Annotation\SerializedName('databaseName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $databaseName = null;
    
    /**
     * Tables in the database.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\MysqlTable> $mysqlTables
     */
	#[\JMS\Serializer\Annotation\SerializedName('mysqlTables')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\MysqlTable>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $mysqlTables = null;
    
	public function __construct()
	{
		$this->databaseName = null;
		$this->mysqlTables = null;
	}
}
