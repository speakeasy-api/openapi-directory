package shared

// QuestionItemInput
// A form item containing a single question.
type QuestionItemInput struct {
	Image    *ImageInput    `json:"image,omitempty"`
	Question *QuestionInput `json:"question,omitempty"`
}

// QuestionItem
// A form item containing a single question.
type QuestionItem struct {
	Image    *Image    `json:"image,omitempty"`
	Question *Question `json:"question,omitempty"`
}
