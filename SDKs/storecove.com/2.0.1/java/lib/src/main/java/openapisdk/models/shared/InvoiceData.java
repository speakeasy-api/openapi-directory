package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvoiceData
 * The invoice to send, in base64 encoded format. Provide either invoice, or invoiceData, but not both.
**/
public class InvoiceData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversionStrategy")
    public InvoiceDataConversionStrategyEnum conversionStrategy;
    public InvoiceData withConversionStrategy(InvoiceDataConversionStrategyEnum conversionStrategy) {
        this.conversionStrategy = conversionStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public String document;
    public InvoiceData withDocument(String document) {
        this.document = document;
        return this;
    }
}