// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// SearchUsersSortEnum - Sorts the results of your query by number of `followers` or `repositories`, or when the person `joined` GitHub Enterprise Server. Default: [best match](https://docs.github.com/enterprise-server@3.7/rest/reference/search#ranking-search-results)
type SearchUsersSortEnum string

const (
	SearchUsersSortEnumFollowers    SearchUsersSortEnum = "followers"
	SearchUsersSortEnumRepositories SearchUsersSortEnum = "repositories"
	SearchUsersSortEnumJoined       SearchUsersSortEnum = "joined"
)

func (e SearchUsersSortEnum) ToPointer() *SearchUsersSortEnum {
	return &e
}

func (e *SearchUsersSortEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "followers":
		fallthrough
	case "repositories":
		fallthrough
	case "joined":
		*e = SearchUsersSortEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for SearchUsersSortEnum: %v", v)
	}
}

type SearchUsersRequest struct {
	// Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
	Order *shared.OrderEnum `queryParam:"style=form,explode=true,name=order"`
	// Page number of the results to fetch.
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// The number of results per page (max 100).
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
	// The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub Enterprise Server. The REST API supports the same qualifiers as the web interface for GitHub Enterprise Server. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/enterprise-server@3.7/rest/reference/search#constructing-a-search-query). See "[Searching users](https://docs.github.com/enterprise-server@3.7/search-github/searching-on-github/searching-users)" for a detailed list of qualifiers.
	Q string `queryParam:"style=form,explode=true,name=q"`
	// Sorts the results of your query by number of `followers` or `repositories`, or when the person `joined` GitHub Enterprise Server. Default: [best match](https://docs.github.com/enterprise-server@3.7/rest/reference/search#ranking-search-results)
	Sort *SearchUsersSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

// SearchUsers503ApplicationJSON - Service unavailable
type SearchUsers503ApplicationJSON struct {
	Code             *string `json:"code,omitempty"`
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

// SearchUsers200ApplicationJSON - Response
type SearchUsers200ApplicationJSON struct {
	IncompleteResults bool                          `json:"incomplete_results"`
	Items             []shared.UserSearchResultItem `json:"items"`
	TotalCount        int64                         `json:"total_count"`
}

type SearchUsersResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	SearchUsers200ApplicationJSONObject *SearchUsers200ApplicationJSON
	// Service unavailable
	SearchUsers503ApplicationJSONObject *SearchUsers503ApplicationJSON
	// Validation failed, or the endpoint has been spammed.
	ValidationError *shared.ValidationError
}
