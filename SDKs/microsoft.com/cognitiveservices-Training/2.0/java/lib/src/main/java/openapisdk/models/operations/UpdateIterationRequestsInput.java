package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIterationRequestsInput {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public UpdateIterationRequestsInput withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IterationInput iteration;
    public UpdateIterationRequestsInput withIteration(openapisdk.models.shared.IterationInput iteration) {
        this.iteration = iteration;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.IterationInput iteration1;
    public UpdateIterationRequestsInput withIteration1(openapisdk.models.shared.IterationInput iteration1) {
        this.iteration1 = iteration1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.IterationInput iteration2;
    public UpdateIterationRequestsInput withIteration2(openapisdk.models.shared.IterationInput iteration2) {
        this.iteration2 = iteration2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] textXML;
    public UpdateIterationRequestsInput withTextXml(byte[] textXML) {
        this.textXML = textXML;
        return this;
    }
}