package shared

// DescribeDatabaseEntitiesResponse
// Response message for 'DescribeDatabaseEntities' request.
type DescribeDatabaseEntitiesResponse struct {
	DatabaseEntities []DatabaseEntity `json:"databaseEntities,omitempty"`
	NextPageToken    *string          `json:"nextPageToken,omitempty"`
}
