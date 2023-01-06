package shared

type BadWordFilterResponse struct {
	BadWordsList    []string `json:"badWordsList"`
	BadWordsTotal   int32    `json:"badWordsTotal"`
	CensoredContent string   `json:"censoredContent"`
	IsBad           bool     `json:"isBad"`
}
