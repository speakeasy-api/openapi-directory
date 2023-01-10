package shared

type BlogArticleLinks struct {
	Android     *Href `json:"android,omitempty"`
	HeaderImage *Href `json:"header_image,omitempty"`
	Ios         *Href `json:"ios,omitempty"`
	Self        *Href `json:"self,omitempty"`
	Web         *Href `json:"web,omitempty"`
}
