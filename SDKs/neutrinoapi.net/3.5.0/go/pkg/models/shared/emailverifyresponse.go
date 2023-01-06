package shared

type EmailVerifyResponse struct {
	Domain       string `json:"domain"`
	DomainError  bool   `json:"domainError"`
	Email        string `json:"email"`
	IsCatchAll   bool   `json:"isCatchAll"`
	IsDeferred   bool   `json:"isDeferred"`
	IsDisposable bool   `json:"isDisposable"`
	IsFreemail   bool   `json:"isFreemail"`
	IsPersonal   bool   `json:"isPersonal"`
	Provider     string `json:"provider"`
	SMTPResponse string `json:"smtpResponse"`
	SMTPStatus   string `json:"smtpStatus"`
	SyntaxError  bool   `json:"syntaxError"`
	TyposFixed   bool   `json:"typosFixed"`
	Valid        bool   `json:"valid"`
	Verified     bool   `json:"verified"`
}
