package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiscoverableParticipant
 * A participant to be discovered.
**/
public class DiscoverableParticipant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentTypes")
    public DiscoverableParticipantDocumentTypesEnum[] documentTypes;
    public DiscoverableParticipant withDocumentTypes(DiscoverableParticipantDocumentTypesEnum[] documentTypes) {
        this.documentTypes = documentTypes;
        return this;
    }
    @JsonProperty("identifier")
    public String identifier;
    public DiscoverableParticipant withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metaScheme")
    public String metaScheme;
    public DiscoverableParticipant withMetaScheme(String metaScheme) {
        this.metaScheme = metaScheme;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public DiscoverableParticipant withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonProperty("scheme")
    public String scheme;
    public DiscoverableParticipant withScheme(String scheme) {
        this.scheme = scheme;
        return this;
    }
}