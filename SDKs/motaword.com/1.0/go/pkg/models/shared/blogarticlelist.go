package shared

type BlogArticleList struct {
	Articles []BlogArticle `json:"articles,omitempty"`
	Meta     *PagingMeta   `json:"meta,omitempty"`
}
