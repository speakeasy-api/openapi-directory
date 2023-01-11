package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Certificate
 * A SSL/TLS X509 certificate
**/
public class Certificate {
    @JsonProperty("autoRenew")
    public String autoRenew;
    public Certificate withAutoRenew(String autoRenew) {
        this.autoRenew = autoRenew;
        return this;
    }
    @JsonProperty("ca")
    public String ca;
    public Certificate withCa(String ca) {
        this.ca = ca;
        return this;
    }
    @JsonProperty("caRef")
    public String caRef;
    public Certificate withCaRef(String caRef) {
        this.caRef = caRef;
        return this;
    }
    @JsonProperty("chain")
    public String chain;
    public Certificate withChain(String chain) {
        this.chain = chain;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public Certificate withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public Certificate withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Certificate withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("privateKey")
    public String privateKey;
    public Certificate withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @JsonProperty("selfSigned")
    public String selfSigned;
    public Certificate withSelfSigned(String selfSigned) {
        this.selfSigned = selfSigned;
        return this;
    }
    @JsonProperty("subject")
    public String subject;
    public Certificate withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public Certificate withTo(String to) {
        this.to = to;
        return this;
    }
    @JsonProperty("valid")
    public String valid;
    public Certificate withValid(String valid) {
        this.valid = valid;
        return this;
    }
}