package shared

import (
	"time"
)

type BlogArticleAnnouncementTypeEnum string

const (
	BlogArticleAnnouncementTypeEnumArticle           BlogArticleAnnouncementTypeEnum = "article"
	BlogArticleAnnouncementTypeEnumCase              BlogArticleAnnouncementTypeEnum = "case"
	BlogArticleAnnouncementTypeEnumFamousTranslators BlogArticleAnnouncementTypeEnum = "famous-translators"
	BlogArticleAnnouncementTypeEnumSales             BlogArticleAnnouncementTypeEnum = "sales"
)

type BlogArticle struct {
	AnnouncementType *BlogArticleAnnouncementTypeEnum `json:"announcement_type,omitempty"`
	Author           *string                          `json:"author,omitempty"`
	Content          *string                          `json:"content,omitempty"`
	CreatedAt        *time.Time                       `json:"created_at,omitempty"`
	Excerpt          *string                          `json:"excerpt,omitempty"`
	ID               *int64                           `json:"id,omitempty"`
	Language         *string                          `json:"language,omitempty"`
	Links            *BlogArticleLinks                `json:"links,omitempty"`
	Slug             *string                          `json:"slug,omitempty"`
	Title            *string                          `json:"title,omitempty"`
	Topic            *string                          `json:"topic,omitempty"`
}
