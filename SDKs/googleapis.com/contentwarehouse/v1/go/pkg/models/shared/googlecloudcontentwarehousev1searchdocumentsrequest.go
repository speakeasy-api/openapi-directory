package shared

type GoogleCloudContentwarehouseV1SearchDocumentsRequestTotalResultSizeEnum string

const (
	GoogleCloudContentwarehouseV1SearchDocumentsRequestTotalResultSizeEnumTotalResultSizeUnspecified GoogleCloudContentwarehouseV1SearchDocumentsRequestTotalResultSizeEnum = "TOTAL_RESULT_SIZE_UNSPECIFIED"
	GoogleCloudContentwarehouseV1SearchDocumentsRequestTotalResultSizeEnumEstimatedSize              GoogleCloudContentwarehouseV1SearchDocumentsRequestTotalResultSizeEnum = "ESTIMATED_SIZE"
	GoogleCloudContentwarehouseV1SearchDocumentsRequestTotalResultSizeEnumActualSize                 GoogleCloudContentwarehouseV1SearchDocumentsRequestTotalResultSizeEnum = "ACTUAL_SIZE"
)

// GoogleCloudContentwarehouseV1SearchDocumentsRequest
// Request message for DocumentService.SearchDocuments.
type GoogleCloudContentwarehouseV1SearchDocumentsRequest struct {
	DocumentQuery    *GoogleCloudContentwarehouseV1DocumentQuery                             `json:"documentQuery,omitempty"`
	HistogramQueries []GoogleCloudContentwarehouseV1HistogramQuery                           `json:"histogramQueries,omitempty"`
	Offset           *int32                                                                  `json:"offset,omitempty"`
	OrderBy          *string                                                                 `json:"orderBy,omitempty"`
	PageSize         *int32                                                                  `json:"pageSize,omitempty"`
	PageToken        *string                                                                 `json:"pageToken,omitempty"`
	QaSizeLimit      *int32                                                                  `json:"qaSizeLimit,omitempty"`
	RequestMetadata  *GoogleCloudContentwarehouseV1RequestMetadata                           `json:"requestMetadata,omitempty"`
	RequireTotalSize *bool                                                                   `json:"requireTotalSize,omitempty"`
	TotalResultSize  *GoogleCloudContentwarehouseV1SearchDocumentsRequestTotalResultSizeEnum `json:"totalResultSize,omitempty"`
}
