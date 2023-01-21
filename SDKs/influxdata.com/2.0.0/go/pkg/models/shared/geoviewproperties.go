package shared

// GeoViewPropertiesCenter
// Coordinates of the center of the map
type GeoViewPropertiesCenter struct {
	Lat float64 `json:"lat"`
	Lon float64 `json:"lon"`
}

type GeoViewPropertiesShapeEnum string

const (
	GeoViewPropertiesShapeEnumChronografV2 GeoViewPropertiesShapeEnum = "chronograf-v2"
)

type GeoViewPropertiesTypeEnum string

const (
	GeoViewPropertiesTypeEnumGeo GeoViewPropertiesTypeEnum = "geo"
)

type GeoViewProperties struct {
	AllowPanAndZoom        bool                       `json:"allowPanAndZoom"`
	Center                 GeoViewPropertiesCenter    `json:"center"`
	Colors                 []DashboardColor           `json:"colors,omitempty"`
	DetectCoordinateFields bool                       `json:"detectCoordinateFields"`
	Layers                 []map[string]interface{}   `json:"layers"`
	MapStyle               *string                    `json:"mapStyle,omitempty"`
	Note                   string                     `json:"note"`
	Queries                []DashboardQuery           `json:"queries"`
	Shape                  GeoViewPropertiesShapeEnum `json:"shape"`
	ShowNoteWhenEmpty      bool                       `json:"showNoteWhenEmpty"`
	Type                   GeoViewPropertiesTypeEnum  `json:"type"`
	Zoom                   float64                    `json:"zoom"`
}
