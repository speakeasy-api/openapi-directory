package shared

// Person
// A person, i.e., an author, editor or other.
type Person struct {
	Firstname *string `json:"firstname,omitempty"`
	Lastname  *string `json:"lastname,omitempty"`
	Name      string  `json:"name"`
}
