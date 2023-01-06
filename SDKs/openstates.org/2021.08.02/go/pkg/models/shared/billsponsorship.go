package shared

type BillSponsorshipOrganization struct {
	Classification string `json:"classification"`
	ID             string `json:"id"`
	Name           string `json:"name"`
}

type BillSponsorship struct {
	Classification string                       `json:"classification"`
	EntityType     string                       `json:"entity_type"`
	Name           string                       `json:"name"`
	Organization   *BillSponsorshipOrganization `json:"organization,omitempty"`
	Person         *CompactPerson               `json:"person,omitempty"`
	Primary        bool                         `json:"primary"`
}
