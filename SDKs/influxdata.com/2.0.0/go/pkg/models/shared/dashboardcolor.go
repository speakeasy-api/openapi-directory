package shared

type DashboardColorTypeEnum string

const (
	DashboardColorTypeEnumMin        DashboardColorTypeEnum = "min"
	DashboardColorTypeEnumMax        DashboardColorTypeEnum = "max"
	DashboardColorTypeEnumThreshold  DashboardColorTypeEnum = "threshold"
	DashboardColorTypeEnumScale      DashboardColorTypeEnum = "scale"
	DashboardColorTypeEnumText       DashboardColorTypeEnum = "text"
	DashboardColorTypeEnumBackground DashboardColorTypeEnum = "background"
)

// DashboardColor
// Defines an encoding of data value into color space.
type DashboardColor struct {
	Hex   string                 `json:"hex"`
	ID    string                 `json:"id"`
	Name  string                 `json:"name"`
	Type  DashboardColorTypeEnum `json:"type"`
	Value float32                `json:"value"`
}
