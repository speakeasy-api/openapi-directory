// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// FileList - A list of files.
type FileList struct {
	// The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
	Files []File `json:"files,omitempty"`
	// Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the "allDrives" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as "user" or "drive".
	IncompleteSearch *bool `json:"incompleteSearch,omitempty"`
	// Identifies what kind of resource this is. Value: the fixed string "drive#fileList".
	Kind *string `json:"kind,omitempty"`
	// The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
