package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrainProjectRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public TrainProjectRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] textXML;
    public TrainProjectRequests withTextXml(byte[] textXML) {
        this.textXML = textXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TrainingParameters trainingParameters;
    public TrainProjectRequests withTrainingParameters(openapisdk.models.shared.TrainingParameters trainingParameters) {
        this.trainingParameters = trainingParameters;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.TrainingParameters trainingParameters1;
    public TrainProjectRequests withTrainingParameters1(openapisdk.models.shared.TrainingParameters trainingParameters1) {
        this.trainingParameters1 = trainingParameters1;
        return this;
    }
}