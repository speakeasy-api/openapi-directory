package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrainRequestBody {
    @SpeakeasyMetadata("multipartForm:name=algorithm")
    public String algorithm;
    public TrainRequestBody withAlgorithm(String algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=datasetId")
    public Long datasetId;
    public TrainRequestBody withDatasetId(Long datasetId) {
        this.datasetId = datasetId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=epochs")
    public Integer epochs;
    public TrainRequestBody withEpochs(Integer epochs) {
        this.epochs = epochs;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=learningRate")
    public Double learningRate;
    public TrainRequestBody withLearningRate(Double learningRate) {
        this.learningRate = learningRate;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public TrainRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=trainParams,json")
    public openapisdk.models.shared.V2LanguageTrainParams trainParams;
    public TrainRequestBody withTrainParams(openapisdk.models.shared.V2LanguageTrainParams trainParams) {
        this.trainParams = trainParams;
        return this;
    }
}