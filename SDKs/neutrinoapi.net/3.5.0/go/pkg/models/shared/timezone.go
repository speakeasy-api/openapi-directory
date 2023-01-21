package shared

// Timezone
// Map containing timezone details
type Timezone struct {
	Abbr string `json:"abbr"`
	Date string `json:"date"`
	ID   string `json:"id"`
	Name string `json:"name"`
	Time string `json:"time"`
}
