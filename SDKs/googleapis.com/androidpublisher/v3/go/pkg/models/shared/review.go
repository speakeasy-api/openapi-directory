// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// Review - An Android app review.
type Review struct {
	// The name of the user who wrote the review.
	AuthorName *string `json:"authorName,omitempty"`
	// A repeated field containing comments for the review.
	Comments []Comment `json:"comments,omitempty"`
	// Unique identifier for this review.
	ReviewID *string `json:"reviewId,omitempty"`
}
