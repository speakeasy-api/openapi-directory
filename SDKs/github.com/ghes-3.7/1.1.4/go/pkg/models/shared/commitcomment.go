// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// CommitComment - Commit Comment
type CommitComment struct {
	// How the author is associated with the repository.
	AuthorAssociation AuthorAssociationEnum `json:"author_association"`
	Body              string                `json:"body"`
	CommitID          string                `json:"commit_id"`
	CreatedAt         time.Time             `json:"created_at"`
	HTMLURL           string                `json:"html_url"`
	ID                int64                 `json:"id"`
	Line              int64                 `json:"line"`
	NodeID            string                `json:"node_id"`
	Path              string                `json:"path"`
	Position          int64                 `json:"position"`
	Reactions         *ReactionRollup       `json:"reactions,omitempty"`
	UpdatedAt         time.Time             `json:"updated_at"`
	URL               string                `json:"url"`
	// A GitHub user.
	User NullableSimpleUser `json:"user"`
}
