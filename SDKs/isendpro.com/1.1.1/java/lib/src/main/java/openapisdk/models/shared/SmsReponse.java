package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SmsReponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etat")
    public Object etat;
    public SmsReponse withEtat(Object etat) {
        this.etat = etat;
        return this;
    }
}