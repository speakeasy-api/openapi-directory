// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleCloudDatalabelingV1beta1EvaluationJobConfig - Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob.
type GoogleCloudDatalabelingV1beta1EvaluationJobConfig struct {
	// Required. Prediction keys that tell Data Labeling Service where to find the data for evaluation in your BigQuery table. When the service samples prediction input and output from your model version and saves it to BigQuery, the data gets stored as JSON strings in the BigQuery table. These keys tell Data Labeling Service how to parse the JSON. You can provide the following entries in this field: * `data_json_key`: the data key for prediction input. You must provide either this key or `reference_json_key`. * `reference_json_key`: the data reference key for prediction input. You must provide either this key or `data_json_key`. * `label_json_key`: the label key for prediction output. Required. * `label_score_json_key`: the score key for prediction output. Required. * `bounding_box_json_key`: the bounding box key for prediction output. Required if your model version perform image object detection. Learn [how to configure prediction keys](/ml-engine/docs/continuous-evaluation/create-job#prediction-keys).
	BigqueryImportKeys map[string]string `json:"bigqueryImportKeys,omitempty"`
	// Config for image bounding poly (and bounding box) human labeling task.
	BoundingPolyConfig *GoogleCloudDatalabelingV1beta1BoundingPolyConfig `json:"boundingPolyConfig,omitempty"`
	// Configuration details used for calculating evaluation metrics and creating an Evaluation.
	EvaluationConfig *GoogleCloudDatalabelingV1beta1EvaluationConfig `json:"evaluationConfig,omitempty"`
	// Provides details for how an evaluation job sends email alerts based on the results of a run.
	EvaluationJobAlertConfig *GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig `json:"evaluationJobAlertConfig,omitempty"`
	// Required. The maximum number of predictions to sample and save to BigQuery during each evaluation interval. This limit overrides `example_sample_percentage`: even if the service has not sampled enough predictions to fulfill `example_sample_perecentage` during an interval, it stops sampling predictions when it meets this limit.
	ExampleCount *int `json:"exampleCount,omitempty"`
	// Required. Fraction of predictions to sample and save to BigQuery during each evaluation interval. For example, 0.1 means 10% of predictions served by your model version get saved to BigQuery.
	ExampleSamplePercentage *float64 `json:"exampleSamplePercentage,omitempty"`
	// Configuration for how human labeling task should be done.
	HumanAnnotationConfig *GoogleCloudDatalabelingV1beta1HumanAnnotationConfig `json:"humanAnnotationConfig,omitempty"`
	// Config for image classification human labeling task.
	ImageClassificationConfig *GoogleCloudDatalabelingV1beta1ImageClassificationConfig `json:"imageClassificationConfig,omitempty"`
	// The configuration of input data, including data type, location, etc.
	InputConfig *GoogleCloudDatalabelingV1beta1InputConfig `json:"inputConfig,omitempty"`
	// Config for text classification human labeling task.
	TextClassificationConfig *GoogleCloudDatalabelingV1beta1TextClassificationConfig `json:"textClassificationConfig,omitempty"`
}
