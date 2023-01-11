package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Routing
 * The different ways to send the invoice to the recipient. The publicIdentifiers are used to send via the Peppol network, if the recipient is not registered on the Peppol network, the invoice will be sent to the email addresses in the emails property. This property is only mandatory when sending the invoice data using the <<_openapi_invoice>> property, not when sending using the <<_openapi_invoicedata>> property, in which case this information will be extracted from the <<_openapi_invoicedata>> object. If you do specify an <<_openapi_invoicerecipient>> object and an <<_openapi_invoicedata>> object, the data from the two will be merged.
**/
public class Routing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eIdentifiers")
    public RoutingIdentifier[] eIdentifiers;
    public Routing withEIdentifiers(RoutingIdentifier[] eIdentifiers) {
        this.eIdentifiers = eIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emails")
    public String[] emails;
    public Routing withEmails(String[] emails) {
        this.emails = emails;
        return this;
    }
}