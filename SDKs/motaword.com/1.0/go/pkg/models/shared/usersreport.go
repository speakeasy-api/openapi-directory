package shared

type UsersReportReport struct {
	Spending  *float32 `json:"spending,omitempty"`
	User      *User    `json:"user,omitempty"`
	WordCount *int64   `json:"word_count,omitempty"`
}

type UsersReport struct {
	Meta   *PagingMeta         `json:"meta,omitempty"`
	Report []UsersReportReport `json:"report,omitempty"`
}
