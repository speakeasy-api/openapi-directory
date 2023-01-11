package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MessagingV1Usecase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usecases")
    public Object[] usecases;
    public MessagingV1Usecase withUsecases(Object[] usecases) {
        this.usecases = usecases;
        return this;
    }
}