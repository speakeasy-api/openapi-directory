<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * SourceAndDestination - A combination of a source range and how to extend that source.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class SourceAndDestination
{
    /**
     * The dimension that data should be filled into.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\SourceAndDestinationDimensionEnum $dimension
     */
	#[\JMS\Serializer\Annotation\SerializedName('dimension')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\SourceAndDestinationDimensionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?SourceAndDestinationDimensionEnum $dimension = null;
    
    /**
     * The number of rows or columns that data should be filled into. Positive numbers expand beyond the last row or last column of the source. Negative numbers expand before the first row or first column of the source.
     * 
     * @var ?int $fillLength
     */
	#[\JMS\Serializer\Annotation\SerializedName('fillLength')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $fillLength = null;
    
    /**
     * A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GridRange $source
     */
	#[\JMS\Serializer\Annotation\SerializedName('source')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GridRange')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GridRange $source = null;
    
	public function __construct()
	{
		$this->dimension = null;
		$this->fillLength = null;
		$this->source = null;
	}
}
