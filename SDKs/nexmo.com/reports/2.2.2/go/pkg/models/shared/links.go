package shared

type LinksDownloadReport struct {
	Href *string `json:"href,omitempty"`
}

type LinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type Links struct {
	DownloadReport *LinksDownloadReport `json:"download_report,omitempty"`
	Self           *LinksSelf           `json:"self,omitempty"`
}
