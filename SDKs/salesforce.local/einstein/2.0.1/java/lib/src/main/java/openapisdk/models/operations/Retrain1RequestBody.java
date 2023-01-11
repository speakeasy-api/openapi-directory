package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Retrain1RequestBody {
    @SpeakeasyMetadata("multipartForm:name=algorithm")
    public String algorithm;
    public Retrain1RequestBody withAlgorithm(String algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=epochs")
    public Integer epochs;
    public Retrain1RequestBody withEpochs(Integer epochs) {
        this.epochs = epochs;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=learningRate")
    public Float learningRate;
    public Retrain1RequestBody withLearningRate(Float learningRate) {
        this.learningRate = learningRate;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=modelId")
    public String modelId;
    public Retrain1RequestBody withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=trainParams,json")
    public openapisdk.models.shared.V2VisionTrainParams trainParams;
    public Retrain1RequestBody withTrainParams(openapisdk.models.shared.V2VisionTrainParams trainParams) {
        this.trainParams = trainParams;
        return this;
    }
}