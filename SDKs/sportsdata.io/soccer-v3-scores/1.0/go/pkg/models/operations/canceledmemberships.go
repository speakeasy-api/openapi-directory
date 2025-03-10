// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// CanceledMembershipsFormatEnum - Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
type CanceledMembershipsFormatEnum string

const (
	CanceledMembershipsFormatEnumXML  CanceledMembershipsFormatEnum = "xml"
	CanceledMembershipsFormatEnumJSON CanceledMembershipsFormatEnum = "json"
)

func (e CanceledMembershipsFormatEnum) ToPointer() *CanceledMembershipsFormatEnum {
	return &e
}

func (e *CanceledMembershipsFormatEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "xml":
		fallthrough
	case "json":
		*e = CanceledMembershipsFormatEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CanceledMembershipsFormatEnum: %v", v)
	}
}

type CanceledMembershipsRequest struct {
	// Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
	Format CanceledMembershipsFormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type CanceledMembershipsResponse struct {
	CanceledMembership *shared.CanceledMembership
	ContentType        string
	StatusCode         int
	RawResponse        *http.Response
}
