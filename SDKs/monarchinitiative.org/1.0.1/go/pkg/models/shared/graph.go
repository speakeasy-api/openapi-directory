package shared

type Graph struct {
	Edges []Edge `json:"edges,omitempty"`
	Nodes []Node `json:"nodes,omitempty"`
}
