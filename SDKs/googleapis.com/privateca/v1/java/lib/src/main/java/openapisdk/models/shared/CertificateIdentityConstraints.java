package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateIdentityConstraints
 * Describes constraints on a Certificate's Subject and SubjectAltNames.
**/
public class CertificateIdentityConstraints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowSubjectAltNamesPassthrough")
    public Boolean allowSubjectAltNamesPassthrough;
    public CertificateIdentityConstraints withAllowSubjectAltNamesPassthrough(Boolean allowSubjectAltNamesPassthrough) {
        this.allowSubjectAltNamesPassthrough = allowSubjectAltNamesPassthrough;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowSubjectPassthrough")
    public Boolean allowSubjectPassthrough;
    public CertificateIdentityConstraints withAllowSubjectPassthrough(Boolean allowSubjectPassthrough) {
        this.allowSubjectPassthrough = allowSubjectPassthrough;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("celExpression")
    public Expr celExpression;
    public CertificateIdentityConstraints withCelExpression(Expr celExpression) {
        this.celExpression = celExpression;
        return this;
    }
}