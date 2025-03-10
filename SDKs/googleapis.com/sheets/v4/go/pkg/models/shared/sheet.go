// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// Sheet - A sheet in a spreadsheet.
type Sheet struct {
	// The banded (alternating colors) ranges on this sheet.
	BandedRanges []BandedRange `json:"bandedRanges,omitempty"`
	// The default filter associated with a sheet.
	BasicFilter *BasicFilter `json:"basicFilter,omitempty"`
	// The specifications of every chart on this sheet.
	Charts []EmbeddedChart `json:"charts,omitempty"`
	// All column groups on this sheet, ordered by increasing range start index, then by group depth.
	ColumnGroups []DimensionGroup `json:"columnGroups,omitempty"`
	// The conditional format rules in this sheet.
	ConditionalFormats []ConditionalFormatRule `json:"conditionalFormats,omitempty"`
	// Data in the grid, if this is a grid sheet. The number of GridData objects returned is dependent on the number of ranges requested on this sheet. For example, if this is representing `Sheet1`, and the spreadsheet was requested with ranges `Sheet1!A1:C10` and `Sheet1!D15:E20`, then the first GridData will have a startRow/startColumn of `0`, while the second one will have `startRow 14` (zero-based row 15), and `startColumn 3` (zero-based column D). For a DATA_SOURCE sheet, you can not request a specific range, the GridData contains all the values.
	Data []GridData `json:"data,omitempty"`
	// The developer metadata associated with a sheet.
	DeveloperMetadata []DeveloperMetadata `json:"developerMetadata,omitempty"`
	// The filter views in this sheet.
	FilterViews []FilterView `json:"filterViews,omitempty"`
	// The ranges that are merged together.
	Merges []GridRange `json:"merges,omitempty"`
	// Properties of a sheet.
	Properties *SheetProperties `json:"properties,omitempty"`
	// The protected ranges in this sheet.
	ProtectedRanges []ProtectedRange `json:"protectedRanges,omitempty"`
	// All row groups on this sheet, ordered by increasing range start index, then by group depth.
	RowGroups []DimensionGroup `json:"rowGroups,omitempty"`
	// The slicers on this sheet.
	Slicers []Slicer `json:"slicers,omitempty"`
}
