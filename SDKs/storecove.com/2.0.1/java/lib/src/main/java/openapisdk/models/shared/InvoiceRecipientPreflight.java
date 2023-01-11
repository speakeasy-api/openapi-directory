package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvoiceRecipientPreflight
 * Identifies the invoice recipient to preflight
**/
public class InvoiceRecipientPreflight {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicIdentifiers")
    public PublicIdentifier[] publicIdentifiers;
    public InvoiceRecipientPreflight withPublicIdentifiers(PublicIdentifier[] publicIdentifiers) {
        this.publicIdentifiers = publicIdentifiers;
        return this;
    }
}