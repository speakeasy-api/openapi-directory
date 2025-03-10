// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum - Optional. Whether or not the suggested answer is relevant. For example: * Query: "Can I change my mailing address?" * Suggested document says: "Items must be returned/exchanged within 60 days of the purchase date." * answer_relevance: AnswerRelevance.IRRELEVANT
type GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum string

const (
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnumAnswerRelevanceUnspecified GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum = "ANSWER_RELEVANCE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnumIrrelevant                 GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum = "IRRELEVANT"
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnumRelevant                   GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum = "RELEVANT"
)

func (e GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum) ToPointer() *GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum {
	return &e
}

func (e *GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ANSWER_RELEVANCE_UNSPECIFIED":
		fallthrough
	case "IRRELEVANT":
		fallthrough
	case "RELEVANT":
		*e = GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum: %v", v)
	}
}

// GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum - Optional. Whether or not the information in the document is correct. For example: * Query: "Can I return the package in 2 days once received?" * Suggested document says: "Items must be returned/exchanged within 60 days of the purchase date." * Ground truth: "No return or exchange is allowed." * [document_correctness]: INCORRECT
type GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum string

const (
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnumDocumentCorrectnessUnspecified GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum = "DOCUMENT_CORRECTNESS_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnumIncorrect                      GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum = "INCORRECT"
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnumCorrect                        GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum = "CORRECT"
)

func (e GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum) ToPointer() *GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum {
	return &e
}

func (e *GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DOCUMENT_CORRECTNESS_UNSPECIFIED":
		fallthrough
	case "INCORRECT":
		fallthrough
	case "CORRECT":
		*e = GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum: %v", v)
	}
}

// GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum - Optional. Whether or not the suggested document is efficient. For example, if the document is poorly written, hard to understand, hard to use or too long to find useful information, document_efficiency is DocumentEfficiency.INEFFICIENT.
type GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum string

const (
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnumDocumentEfficiencyUnspecified GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum = "DOCUMENT_EFFICIENCY_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnumInefficient                   GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum = "INEFFICIENT"
	GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnumEfficient                     GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum = "EFFICIENT"
)

func (e GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum) ToPointer() *GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum {
	return &e
}

func (e *GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DOCUMENT_EFFICIENCY_UNSPECIFIED":
		fallthrough
	case "INEFFICIENT":
		fallthrough
	case "EFFICIENT":
		*e = GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum: %v", v)
	}
}

// GoogleCloudDialogflowV2beta1AgentAssistantFeedback - Detail feedback of Agent Assistant result.
type GoogleCloudDialogflowV2beta1AgentAssistantFeedback struct {
	// Optional. Whether or not the suggested answer is relevant. For example: * Query: "Can I change my mailing address?" * Suggested document says: "Items must be returned/exchanged within 60 days of the purchase date." * answer_relevance: AnswerRelevance.IRRELEVANT
	AnswerRelevance *GoogleCloudDialogflowV2beta1AgentAssistantFeedbackAnswerRelevanceEnum `json:"answerRelevance,omitempty"`
	// Optional. Whether or not the information in the document is correct. For example: * Query: "Can I return the package in 2 days once received?" * Suggested document says: "Items must be returned/exchanged within 60 days of the purchase date." * Ground truth: "No return or exchange is allowed." * [document_correctness]: INCORRECT
	DocumentCorrectness *GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentCorrectnessEnum `json:"documentCorrectness,omitempty"`
	// Optional. Whether or not the suggested document is efficient. For example, if the document is poorly written, hard to understand, hard to use or too long to find useful information, document_efficiency is DocumentEfficiency.INEFFICIENT.
	DocumentEfficiency *GoogleCloudDialogflowV2beta1AgentAssistantFeedbackDocumentEfficiencyEnum `json:"documentEfficiency,omitempty"`
	// Feedback for conversation summarization.
	SummarizationFeedback *GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback `json:"summarizationFeedback,omitempty"`
}
