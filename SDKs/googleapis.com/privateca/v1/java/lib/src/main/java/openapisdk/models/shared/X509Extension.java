package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * X509Extension
 * An X509Extension specifies an X.509 extension, which may be used in different parts of X.509 objects like certificates, CSRs, and CRLs.
**/
public class X509Extension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("critical")
    public Boolean critical;
    public X509Extension withCritical(Boolean critical) {
        this.critical = critical;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectId")
    public ObjectId objectId;
    public X509Extension withObjectId(ObjectId objectId) {
        this.objectId = objectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public X509Extension withValue(String value) {
        this.value = value;
        return this;
    }
}