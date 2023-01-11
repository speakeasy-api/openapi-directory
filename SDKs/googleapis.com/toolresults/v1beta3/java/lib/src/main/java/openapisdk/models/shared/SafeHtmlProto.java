package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SafeHtmlProto
 * IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests.
**/
public class SafeHtmlProto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateDoNotAccessOrElseSafeHtmlWrappedValue")
    public String privateDoNotAccessOrElseSafeHtmlWrappedValue;
    public SafeHtmlProto withPrivateDoNotAccessOrElseSafeHtmlWrappedValue(String privateDoNotAccessOrElseSafeHtmlWrappedValue) {
        this.privateDoNotAccessOrElseSafeHtmlWrappedValue = privateDoNotAccessOrElseSafeHtmlWrappedValue;
        return this;
    }
}