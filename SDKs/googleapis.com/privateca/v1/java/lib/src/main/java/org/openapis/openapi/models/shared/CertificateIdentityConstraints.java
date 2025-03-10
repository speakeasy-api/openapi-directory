/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CertificateIdentityConstraints - Describes constraints on a Certificate's Subject and SubjectAltNames.
 */
public class CertificateIdentityConstraints {
    /**
     * Required. If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowSubjectAltNamesPassthrough")
    public Boolean allowSubjectAltNamesPassthrough;

    public CertificateIdentityConstraints withAllowSubjectAltNamesPassthrough(Boolean allowSubjectAltNamesPassthrough) {
        this.allowSubjectAltNamesPassthrough = allowSubjectAltNamesPassthrough;
        return this;
    }
    
    /**
     * Required. If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowSubjectPassthrough")
    public Boolean allowSubjectPassthrough;

    public CertificateIdentityConstraints withAllowSubjectPassthrough(Boolean allowSubjectPassthrough) {
        this.allowSubjectPassthrough = allowSubjectPassthrough;
        return this;
    }
    
    /**
     * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() &lt; 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' &amp;&amp; document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("celExpression")
    public Expr celExpression;

    public CertificateIdentityConstraints withCelExpression(Expr celExpression) {
        this.celExpression = celExpression;
        return this;
    }
    
    public CertificateIdentityConstraints(){}
}
