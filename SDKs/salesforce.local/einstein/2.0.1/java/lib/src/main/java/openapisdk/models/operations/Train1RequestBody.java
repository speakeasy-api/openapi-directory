package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Train1RequestBody {
    @SpeakeasyMetadata("multipartForm:name=algorithm")
    public String algorithm;
    public Train1RequestBody withAlgorithm(String algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=datasetId")
    public Long datasetId;
    public Train1RequestBody withDatasetId(Long datasetId) {
        this.datasetId = datasetId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=epochs")
    public Integer epochs;
    public Train1RequestBody withEpochs(Integer epochs) {
        this.epochs = epochs;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=learningRate")
    public Double learningRate;
    public Train1RequestBody withLearningRate(Double learningRate) {
        this.learningRate = learningRate;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public Train1RequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=trainParams,json")
    public openapisdk.models.shared.V2VisionTrainParams trainParams;
    public Train1RequestBody withTrainParams(openapisdk.models.shared.V2VisionTrainParams trainParams) {
        this.trainParams = trainParams;
        return this;
    }
}