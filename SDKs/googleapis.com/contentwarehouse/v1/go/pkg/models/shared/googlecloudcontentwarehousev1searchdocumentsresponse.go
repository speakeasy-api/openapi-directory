package shared

// GoogleCloudContentwarehouseV1SearchDocumentsResponse
// Response message for DocumentService.SearchDocuments.
type GoogleCloudContentwarehouseV1SearchDocumentsResponse struct {
	HistogramQueryResults []GoogleCloudContentwarehouseV1HistogramQueryResult                    `json:"histogramQueryResults,omitempty"`
	MatchingDocuments     []GoogleCloudContentwarehouseV1SearchDocumentsResponseMatchingDocument `json:"matchingDocuments,omitempty"`
	Metadata              *GoogleCloudContentwarehouseV1ResponseMetadata                         `json:"metadata,omitempty"`
	NextPageToken         *string                                                                `json:"nextPageToken,omitempty"`
	TotalSize             *int32                                                                 `json:"totalSize,omitempty"`
}
