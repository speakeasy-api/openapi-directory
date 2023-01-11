package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MessagingV1ServiceUsAppToPersonUsecase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("us_app_to_person_usecases")
    public Object[] usAppToPersonUsecases;
    public MessagingV1ServiceUsAppToPersonUsecase withUsAppToPersonUsecases(Object[] usAppToPersonUsecases) {
        this.usAppToPersonUsecases = usAppToPersonUsecases;
        return this;
    }
}