package openapisdk.models.operations;



public class CancellationReasonsResponse {
    public openapisdk.models.shared.FourHundredAndOneUnauthorized fourHundredAndOneUNAUTHORIZED;
    public CancellationReasonsResponse withFourHundredAndOneUnauthorized(openapisdk.models.shared.FourHundredAndOneUnauthorized fourHundredAndOneUNAUTHORIZED) {
        this.fourHundredAndOneUNAUTHORIZED = fourHundredAndOneUNAUTHORIZED;
        return this;
    }
    public openapisdk.models.shared.FourHundredAndSixNotAcceptable fourHundredAndSixNOTACCEPTABLE;
    public CancellationReasonsResponse withFourHundredAndSixNotAcceptable(openapisdk.models.shared.FourHundredAndSixNotAcceptable fourHundredAndSixNOTACCEPTABLE) {
        this.fourHundredAndSixNOTACCEPTABLE = fourHundredAndSixNOTACCEPTABLE;
        return this;
    }
    public openapisdk.models.shared.FiveHundredInternalServerError fiveHundredINTERNALSERVERERROR;
    public CancellationReasonsResponse withFiveHundredInternalServerError(openapisdk.models.shared.FiveHundredInternalServerError fiveHundredINTERNALSERVERERROR) {
        this.fiveHundredINTERNALSERVERERROR = fiveHundredINTERNALSERVERERROR;
        return this;
    }
    public openapisdk.models.shared.FiveHundredAndThreeServiceUnavailable fiveHundredAndThreeSERVICEUNAVAILABLE;
    public CancellationReasonsResponse withFiveHundredAndThreeServiceUnavailable(openapisdk.models.shared.FiveHundredAndThreeServiceUnavailable fiveHundredAndThreeSERVICEUNAVAILABLE) {
        this.fiveHundredAndThreeSERVICEUNAVAILABLE = fiveHundredAndThreeSERVICEUNAVAILABLE;
        return this;
    }
    public openapisdk.models.shared.CancellationReasonsResponse[] cancellationReasonsResponses;
    public CancellationReasonsResponse withCancellationReasonsResponses(openapisdk.models.shared.CancellationReasonsResponse[] cancellationReasonsResponses) {
        this.cancellationReasonsResponses = cancellationReasonsResponses;
        return this;
    }
    public String contentType;
    public CancellationReasonsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CancellationReasonsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}