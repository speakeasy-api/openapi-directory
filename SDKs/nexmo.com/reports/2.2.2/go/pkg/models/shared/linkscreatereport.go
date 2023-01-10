package shared

type LinksCreateReportSelf struct {
	Href *string `json:"href,omitempty"`
}

type LinksCreateReport struct {
	Self *LinksCreateReportSelf `json:"self,omitempty"`
}
