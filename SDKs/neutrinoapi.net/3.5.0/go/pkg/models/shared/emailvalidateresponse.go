package shared

type EmailValidateResponse struct {
	Domain       string `json:"domain"`
	DomainError  bool   `json:"domainError"`
	Email        string `json:"email"`
	IsDisposable bool   `json:"isDisposable"`
	IsFreemail   bool   `json:"isFreemail"`
	IsPersonal   bool   `json:"isPersonal"`
	Provider     string `json:"provider"`
	SyntaxError  bool   `json:"syntaxError"`
	TyposFixed   bool   `json:"typosFixed"`
	Valid        bool   `json:"valid"`
}
