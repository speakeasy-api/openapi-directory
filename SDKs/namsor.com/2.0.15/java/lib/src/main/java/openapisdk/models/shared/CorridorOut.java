package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CorridorOut
 * Represent multiple classifications for corridor sender and receiver (gender, country, origin, diaspora)
**/
public class CorridorOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstLastNameDiasporaedOut")
    public FirstLastNameDiasporaedOut firstLastNameDiasporaedOut;
    public CorridorOut withFirstLastNameDiasporaedOut(FirstLastNameDiasporaedOut firstLastNameDiasporaedOut) {
        this.firstLastNameDiasporaedOut = firstLastNameDiasporaedOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstLastNameGenderedOut")
    public FirstLastNameGenderedOut firstLastNameGenderedOut;
    public CorridorOut withFirstLastNameGenderedOut(FirstLastNameGenderedOut firstLastNameGenderedOut) {
        this.firstLastNameGenderedOut = firstLastNameGenderedOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstLastNameOriginedOut")
    public FirstLastNameOriginedOut firstLastNameOriginedOut;
    public CorridorOut withFirstLastNameOriginedOut(FirstLastNameOriginedOut firstLastNameOriginedOut) {
        this.firstLastNameOriginedOut = firstLastNameOriginedOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CorridorOut withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public CorridorOut withScript(String script) {
        this.script = script;
        return this;
    }
}