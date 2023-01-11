package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrainRequestBody {
    @SpeakeasyMetadata("multipartForm:name=algorithm")
    public String algorithm;
    public RetrainRequestBody withAlgorithm(String algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=epochs")
    public Integer epochs;
    public RetrainRequestBody withEpochs(Integer epochs) {
        this.epochs = epochs;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=learningRate")
    public Float learningRate;
    public RetrainRequestBody withLearningRate(Float learningRate) {
        this.learningRate = learningRate;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=modelId")
    public String modelId;
    public RetrainRequestBody withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=trainParams,json")
    public openapisdk.models.shared.V2LanguageTrainParams trainParams;
    public RetrainRequestBody withTrainParams(openapisdk.models.shared.V2LanguageTrainParams trainParams) {
        this.trainParams = trainParams;
        return this;
    }
}