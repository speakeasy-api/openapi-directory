// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// GetOccupantsAddressesOutputFormatInterpolationEnum - accessPoint interpolation method. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#interpolation target="_blank">interpolation</a>
type GetOccupantsAddressesOutputFormatInterpolationEnum string

const (
	GetOccupantsAddressesOutputFormatInterpolationEnumAdaptive GetOccupantsAddressesOutputFormatInterpolationEnum = "adaptive"
	GetOccupantsAddressesOutputFormatInterpolationEnumLinear   GetOccupantsAddressesOutputFormatInterpolationEnum = "linear"
	GetOccupantsAddressesOutputFormatInterpolationEnumNone     GetOccupantsAddressesOutputFormatInterpolationEnum = "none"
)

func (e GetOccupantsAddressesOutputFormatInterpolationEnum) ToPointer() *GetOccupantsAddressesOutputFormatInterpolationEnum {
	return &e
}

func (e *GetOccupantsAddressesOutputFormatInterpolationEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "adaptive":
		fallthrough
	case "linear":
		fallthrough
	case "none":
		*e = GetOccupantsAddressesOutputFormatInterpolationEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetOccupantsAddressesOutputFormatInterpolationEnum: %v", v)
	}
}

// GetOccupantsAddressesOutputFormatLocationDescriptorEnum - Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
type GetOccupantsAddressesOutputFormatLocationDescriptorEnum string

const (
	GetOccupantsAddressesOutputFormatLocationDescriptorEnumAny            GetOccupantsAddressesOutputFormatLocationDescriptorEnum = "any"
	GetOccupantsAddressesOutputFormatLocationDescriptorEnumAccessPoint    GetOccupantsAddressesOutputFormatLocationDescriptorEnum = "accessPoint"
	GetOccupantsAddressesOutputFormatLocationDescriptorEnumFrontDoorPoint GetOccupantsAddressesOutputFormatLocationDescriptorEnum = "frontDoorPoint"
	GetOccupantsAddressesOutputFormatLocationDescriptorEnumParcelPoint    GetOccupantsAddressesOutputFormatLocationDescriptorEnum = "parcelPoint"
	GetOccupantsAddressesOutputFormatLocationDescriptorEnumRooftopPoint   GetOccupantsAddressesOutputFormatLocationDescriptorEnum = "rooftopPoint"
	GetOccupantsAddressesOutputFormatLocationDescriptorEnumRoutingPoint   GetOccupantsAddressesOutputFormatLocationDescriptorEnum = "routingPoint"
)

func (e GetOccupantsAddressesOutputFormatLocationDescriptorEnum) ToPointer() *GetOccupantsAddressesOutputFormatLocationDescriptorEnum {
	return &e
}

func (e *GetOccupantsAddressesOutputFormatLocationDescriptorEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "any":
		fallthrough
	case "accessPoint":
		fallthrough
	case "frontDoorPoint":
		fallthrough
	case "parcelPoint":
		fallthrough
	case "rooftopPoint":
		fallthrough
	case "routingPoint":
		*e = GetOccupantsAddressesOutputFormatLocationDescriptorEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetOccupantsAddressesOutputFormatLocationDescriptorEnum: %v", v)
	}
}

// GetOccupantsAddressesOutputFormatOutputFormatEnum - Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>.
//
// Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)
type GetOccupantsAddressesOutputFormatOutputFormatEnum string

const (
	GetOccupantsAddressesOutputFormatOutputFormatEnumJSON    GetOccupantsAddressesOutputFormatOutputFormatEnum = "json"
	GetOccupantsAddressesOutputFormatOutputFormatEnumGeojson GetOccupantsAddressesOutputFormatOutputFormatEnum = "geojson"
	GetOccupantsAddressesOutputFormatOutputFormatEnumXhtml   GetOccupantsAddressesOutputFormatOutputFormatEnum = "xhtml"
	GetOccupantsAddressesOutputFormatOutputFormatEnumKml     GetOccupantsAddressesOutputFormatOutputFormatEnum = "kml"
	GetOccupantsAddressesOutputFormatOutputFormatEnumGml     GetOccupantsAddressesOutputFormatOutputFormatEnum = "gml"
	GetOccupantsAddressesOutputFormatOutputFormatEnumCsv     GetOccupantsAddressesOutputFormatOutputFormatEnum = "csv"
	GetOccupantsAddressesOutputFormatOutputFormatEnumShpz    GetOccupantsAddressesOutputFormatOutputFormatEnum = "shpz"
)

func (e GetOccupantsAddressesOutputFormatOutputFormatEnum) ToPointer() *GetOccupantsAddressesOutputFormatOutputFormatEnum {
	return &e
}

func (e *GetOccupantsAddressesOutputFormatOutputFormatEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "json":
		fallthrough
	case "geojson":
		fallthrough
	case "xhtml":
		fallthrough
	case "kml":
		fallthrough
	case "gml":
		fallthrough
	case "csv":
		fallthrough
	case "shpz":
		*e = GetOccupantsAddressesOutputFormatOutputFormatEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetOccupantsAddressesOutputFormatOutputFormatEnum: %v", v)
	}
}

// GetOccupantsAddressesOutputFormatOutputSrsEnum - The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>
type GetOccupantsAddressesOutputFormatOutputSrsEnum int64

const (
	GetOccupantsAddressesOutputFormatOutputSrsEnumFourThousandThreeHundredAndTwentySix  GetOccupantsAddressesOutputFormatOutputSrsEnum = 4326
	GetOccupantsAddressesOutputFormatOutputSrsEnumFourThousandTwoHundredAndSixtyNine    GetOccupantsAddressesOutputFormatOutputSrsEnum = 4269
	GetOccupantsAddressesOutputFormatOutputSrsEnumThreeThousandAndFive                  GetOccupantsAddressesOutputFormatOutputSrsEnum = 3005
	GetOccupantsAddressesOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndSeven  GetOccupantsAddressesOutputFormatOutputSrsEnum = 26907
	GetOccupantsAddressesOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndEight  GetOccupantsAddressesOutputFormatOutputSrsEnum = 26908
	GetOccupantsAddressesOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndNine   GetOccupantsAddressesOutputFormatOutputSrsEnum = 26909
	GetOccupantsAddressesOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndTen    GetOccupantsAddressesOutputFormatOutputSrsEnum = 26910
	GetOccupantsAddressesOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndEleven GetOccupantsAddressesOutputFormatOutputSrsEnum = 26911
)

func (e GetOccupantsAddressesOutputFormatOutputSrsEnum) ToPointer() *GetOccupantsAddressesOutputFormatOutputSrsEnum {
	return &e
}

func (e *GetOccupantsAddressesOutputFormatOutputSrsEnum) UnmarshalJSON(data []byte) error {
	var v int64
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case 4326:
		fallthrough
	case 4269:
		fallthrough
	case 3005:
		fallthrough
	case 26907:
		fallthrough
	case 26908:
		fallthrough
	case 26909:
		fallthrough
	case 26910:
		fallthrough
	case 26911:
		*e = GetOccupantsAddressesOutputFormatOutputSrsEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetOccupantsAddressesOutputFormatOutputSrsEnum: %v", v)
	}
}

// GetOccupantsAddressesOutputFormatStreetDirectionEnum - The abbreviated compass direction as defined by Canada Post and B.C. civic addressing authorities. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetDirection target="_blank">streetDirection</a>
type GetOccupantsAddressesOutputFormatStreetDirectionEnum string

const (
	GetOccupantsAddressesOutputFormatStreetDirectionEnumN  GetOccupantsAddressesOutputFormatStreetDirectionEnum = "N"
	GetOccupantsAddressesOutputFormatStreetDirectionEnumS  GetOccupantsAddressesOutputFormatStreetDirectionEnum = "S"
	GetOccupantsAddressesOutputFormatStreetDirectionEnumE  GetOccupantsAddressesOutputFormatStreetDirectionEnum = "E"
	GetOccupantsAddressesOutputFormatStreetDirectionEnumW  GetOccupantsAddressesOutputFormatStreetDirectionEnum = "W"
	GetOccupantsAddressesOutputFormatStreetDirectionEnumO  GetOccupantsAddressesOutputFormatStreetDirectionEnum = "O"
	GetOccupantsAddressesOutputFormatStreetDirectionEnumNe GetOccupantsAddressesOutputFormatStreetDirectionEnum = "NE"
	GetOccupantsAddressesOutputFormatStreetDirectionEnumNo GetOccupantsAddressesOutputFormatStreetDirectionEnum = "NO"
	GetOccupantsAddressesOutputFormatStreetDirectionEnumNw GetOccupantsAddressesOutputFormatStreetDirectionEnum = "NW"
	GetOccupantsAddressesOutputFormatStreetDirectionEnumSe GetOccupantsAddressesOutputFormatStreetDirectionEnum = "SE"
	GetOccupantsAddressesOutputFormatStreetDirectionEnumSo GetOccupantsAddressesOutputFormatStreetDirectionEnum = "SO"
	GetOccupantsAddressesOutputFormatStreetDirectionEnumSw GetOccupantsAddressesOutputFormatStreetDirectionEnum = "SW"
)

func (e GetOccupantsAddressesOutputFormatStreetDirectionEnum) ToPointer() *GetOccupantsAddressesOutputFormatStreetDirectionEnum {
	return &e
}

func (e *GetOccupantsAddressesOutputFormatStreetDirectionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "N":
		fallthrough
	case "S":
		fallthrough
	case "E":
		fallthrough
	case "W":
		fallthrough
	case "O":
		fallthrough
	case "NE":
		fallthrough
	case "NO":
		fallthrough
	case "NW":
		fallthrough
	case "SE":
		fallthrough
	case "SO":
		fallthrough
	case "SW":
		*e = GetOccupantsAddressesOutputFormatStreetDirectionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetOccupantsAddressesOutputFormatStreetDirectionEnum: %v", v)
	}
}

// GetOccupantsAddressesOutputFormatUnitDesignatorEnum - The type of unit within a house or building. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#unitDesignator target="_blank">unitDesignator</a>
type GetOccupantsAddressesOutputFormatUnitDesignatorEnum string

const (
	GetOccupantsAddressesOutputFormatUnitDesignatorEnumApt   GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "APT"
	GetOccupantsAddressesOutputFormatUnitDesignatorEnumBldg  GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "BLDG"
	GetOccupantsAddressesOutputFormatUnitDesignatorEnumBsmt  GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "BSMT"
	GetOccupantsAddressesOutputFormatUnitDesignatorEnumFlr   GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "FLR"
	GetOccupantsAddressesOutputFormatUnitDesignatorEnumLobby GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "LOBBY"
	GetOccupantsAddressesOutputFormatUnitDesignatorEnumLwr   GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "LWR"
	GetOccupantsAddressesOutputFormatUnitDesignatorEnumPad   GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "PAD"
	GetOccupantsAddressesOutputFormatUnitDesignatorEnumPh    GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "PH"
	GetOccupantsAddressesOutputFormatUnitDesignatorEnumRear  GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "REAR"
	GetOccupantsAddressesOutputFormatUnitDesignatorEnumRm    GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "RM"
	GetOccupantsAddressesOutputFormatUnitDesignatorEnumSide  GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "SIDE"
	GetOccupantsAddressesOutputFormatUnitDesignatorEnumSite  GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "SITE"
	GetOccupantsAddressesOutputFormatUnitDesignatorEnumSuite GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "SUITE"
	GetOccupantsAddressesOutputFormatUnitDesignatorEnumTh    GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "TH"
	GetOccupantsAddressesOutputFormatUnitDesignatorEnumUnit  GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "UNIT"
	GetOccupantsAddressesOutputFormatUnitDesignatorEnumUppr  GetOccupantsAddressesOutputFormatUnitDesignatorEnum = "UPPR"
)

func (e GetOccupantsAddressesOutputFormatUnitDesignatorEnum) ToPointer() *GetOccupantsAddressesOutputFormatUnitDesignatorEnum {
	return &e
}

func (e *GetOccupantsAddressesOutputFormatUnitDesignatorEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "APT":
		fallthrough
	case "BLDG":
		fallthrough
	case "BSMT":
		fallthrough
	case "FLR":
		fallthrough
	case "LOBBY":
		fallthrough
	case "LWR":
		fallthrough
	case "PAD":
		fallthrough
	case "PH":
		fallthrough
	case "REAR":
		fallthrough
	case "RM":
		fallthrough
	case "SIDE":
		fallthrough
	case "SITE":
		fallthrough
	case "SUITE":
		fallthrough
	case "TH":
		fallthrough
	case "UNIT":
		fallthrough
	case "UPPR":
		*e = GetOccupantsAddressesOutputFormatUnitDesignatorEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetOccupantsAddressesOutputFormatUnitDesignatorEnum: %v", v)
	}
}

type GetOccupantsAddressesOutputFormatRequest struct {
	// Occupant name OR Occupant name ** address
	AddressString *string `queryParam:"style=form,explode=true,name=addressString"`
	// If true, addressString is expected to contain a partial address that requires completion. Not supported for shp, csv, gml formats.
	AutoComplete *bool `queryParam:"style=form,explode=true,name=autoComplete"`
	// Example: -126.07929,49.7628,-126.0163,49.7907.  A bounding box (xmin,ymin,xmax,ymax) that limits the search area. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#bbox target="_blank">bbox</a>
	Bbox *string `queryParam:"style=form,explode=true,name=bbox"`
	// If true, include only basic match and address details in results. Not supported for shp, csv, and gml formats.
	Brief *bool `queryParam:"style=form,explode=true,name=brief"`
	// Example: -124.0165926,49.2296251 .  The coordinates of a centre point (x,y) used to define a bounding circle that will limit the search area. This parameter must be specified together with 'maxDistance'. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#centre target='_blank'>centre</a>
	Centre *string `queryParam:"style=form,explode=true,name=centre"`
	// The official number assigned to a site by an address authority. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#civicNumber target="_blank">civicNumber</a>
	CivicNumber *string `queryParam:"style=form,explode=true,name=civicNumber"`
	// A letter or fraction that follows the civic number (e.g., the A in 1039A Bledsoe St). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#civicNumberSuffix target="_blank">civicNumberSuffix</a>
	CivicNumberSuffix *string `queryParam:"style=form,explode=true,name=civicNumberSuffix"`
	// If true, include unmatched address details such as site name in results.
	Echo *bool `queryParam:"style=form,explode=true,name=echo"`
	// If true, uses supplied parcelPoint to derive an appropriate accessPoint.           See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#extrapolate target="_blank">extrapolate</a>
	Extrapolate *bool `queryParam:"style=form,explode=true,name=extrapolate"`
	// accessPoint interpolation method. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#interpolation target="_blank">interpolation</a>
	Interpolation *GetOccupantsAddressesOutputFormatInterpolationEnum `queryParam:"style=form,explode=true,name=interpolation"`
	// A comma separated list of locality names that matched addresses must belong to. For example, setting localities to Nanaimo only returns addresses in Nanaimo
	Localities *string `queryParam:"style=form,explode=true,name=localities"`
	// The name of the locality assigned to a given site by an address authority. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetDirection target="_blank">streetDirection</a>
	LocalityName *string `queryParam:"style=form,explode=true,name=localityName"`
	// Describes the nature of the address location. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#locationDescriptor target="_blank">locationDescriptor</a>
	LocationDescriptor *GetOccupantsAddressesOutputFormatLocationDescriptorEnum `queryParam:"style=form,explode=true,name=locationDescriptor"`
	// Example: street,locality.  A comma separated list of individual match precision levels to include in results. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#matchPrecision target="_blank">matchPrecision</a>
	MatchPrecision *string `queryParam:"style=form,explode=true,name=matchPrecision"`
	// Example: street,locality.  A comma separated list of individual match precision levels to exclude from results. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#matchPrecisionNot target="_blank">matchPrecisionNot</a>
	MatchPrecisionNot *string `queryParam:"style=form,explode=true,name=matchPrecisionNot"`
	// The maximum distance (in metres) to search from the given point.  If not specified, the search distance is unlimited.
	MaxDistance *float64 `queryParam:"style=form,explode=true,name=maxDistance"`
	// The maximum number of search results to return.
	MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
	// The minimum score required for a match to be returned. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#minScore target="_blank">minScore</a>
	MinScore *int64 `queryParam:"style=form,explode=true,name=minScore"`
	// A comma-separated list of localities to exclude from the search.
	NotLocalities *string `queryParam:"style=form,explode=true,name=notLocalities"`
	// Results format. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputFormat target="_blank">outputFormat</a>.
	//
	// Note: GeoJSON and KML formats only support EPSG:4326 (outputSRS=4326)
	OutputFormat GetOccupantsAddressesOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=outputFormat"`
	// The EPSG code of the spatial reference system (SRS) to use for output geometries. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#outputSRS target="_blank">outputSRS</a>
	OutputSRS *GetOccupantsAddressesOutputFormatOutputSrsEnum `queryParam:"style=form,explode=true,name=outputSRS"`
	// The coordinates of a point (x,y) known to be inside the parcel containing a given address. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#parcelPoint target="_blank">parcelPoint</a>
	ParcelPoint *string `queryParam:"style=form,explode=true,name=parcelPoint"`
	// The ISO 3166-2 Sub-Country Code. The code for British Columbia is BC.
	ProvinceCode *string `queryParam:"style=form,explode=true,name=provinceCode"`
	// The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
	SetBack *int64 `queryParam:"style=form,explode=true,name=setBack"`
	// A string containing the name of the building, facility, or institution (e.g., Duck Building, Casa Del Mar, Crystal Garden, Bluebird House).See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#siteName target="_blank">siteName</a>
	SiteName *string `queryParam:"style=form,explode=true,name=siteName"`
	// The abbreviated compass direction as defined by Canada Post and B.C. civic addressing authorities. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetDirection target="_blank">streetDirection</a>
	StreetDirection *GetOccupantsAddressesOutputFormatStreetDirectionEnum `queryParam:"style=form,explode=true,name=streetDirection"`
	// The official name of the street as assigned by an address authority (e.g., the Douglas in 1175 Douglas Street). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetName target="_blank">streetName</a>
	StreetName *string `queryParam:"style=form,explode=true,name=streetName"`
	// The qualifier of a street name (e.g., the Bridge in Johnson St Bridge)
	StreetQualifier *string `queryParam:"style=form,explode=true,name=streetQualifier"`
	// The type of street as assigned by a municipality (e.g., the ST in 1175 DOUGLAS St). See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#streetType target="_blank">streetType</a>
	StreetType *string `queryParam:"style=form,explode=true,name=streetType"`
	// Example: schools;courts;employment<br>A list of tags separated by semicolons.
	Tags *string `queryParam:"style=form,explode=true,name=tags"`
	// The type of unit within a house or building. See <a href=https://github.com/bcgov/ols-geocoder/blob/gh-pages/glossary.md#unitDesignator target="_blank">unitDesignator</a>
	UnitDesignator *GetOccupantsAddressesOutputFormatUnitDesignatorEnum `queryParam:"style=form,explode=true,name=unitDesignator"`
	// The number of the unit, suite, or apartment within a house or building.
	UnitNumber *string `queryParam:"style=form,explode=true,name=unitNumber"`
	// A letter that follows the unit number as in Unit 1A or Suite 302B.
	UnitNumberSuffix *string `queryParam:"style=form,explode=true,name=unitNumberSuffix"`
}

type GetOccupantsAddressesOutputFormatResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
