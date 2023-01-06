package shared

import (
	"time"
)

// ReferenceResourceAttributes
// Model that stores the attributes of a reference.
//
// Many properties match the meaning described in the
// [BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf).
type ReferenceResourceAttributes struct {
	Address      *string   `json:"address,omitempty"`
	Annote       *string   `json:"annote,omitempty"`
	Authors      []Person  `json:"authors,omitempty"`
	BibType      *string   `json:"bib_type,omitempty"`
	Booktitle    *string   `json:"booktitle,omitempty"`
	Chapter      *string   `json:"chapter,omitempty"`
	Crossref     *string   `json:"crossref,omitempty"`
	Doi          *string   `json:"doi,omitempty"`
	Edition      *string   `json:"edition,omitempty"`
	Editors      []Person  `json:"editors,omitempty"`
	Howpublished *string   `json:"howpublished,omitempty"`
	ImmutableID  *string   `json:"immutable_id,omitempty"`
	Institution  *string   `json:"institution,omitempty"`
	Journal      *string   `json:"journal,omitempty"`
	Key          *string   `json:"key,omitempty"`
	LastModified time.Time `json:"last_modified"`
	Month        *string   `json:"month,omitempty"`
	Note         *string   `json:"note,omitempty"`
	Number       *string   `json:"number,omitempty"`
	Organization *string   `json:"organization,omitempty"`
	Pages        *string   `json:"pages,omitempty"`
	Publisher    *string   `json:"publisher,omitempty"`
	School       *string   `json:"school,omitempty"`
	Series       *string   `json:"series,omitempty"`
	Title        *string   `json:"title,omitempty"`
	URL          *string   `json:"url,omitempty"`
	Volume       *string   `json:"volume,omitempty"`
	Year         *string   `json:"year,omitempty"`
}
