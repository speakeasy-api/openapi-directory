package shared

type VendorWithNeeds struct {
	MatchedNeeds []FileNeedsVendor `json:"matchedNeeds,omitempty"`
	UserID       *int64            `json:"userId,omitempty"`
}
