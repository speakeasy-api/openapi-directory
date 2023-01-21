package shared

// AstResponse
// Contains the AST for the supplied Flux query
type AstResponse struct {
	Ast *Package `json:"ast,omitempty"`
}
