package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketBilling
 * The bucket's billing configuration.
**/
public class BucketBilling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requesterPays")
    public Boolean requesterPays;
    public BucketBilling withRequesterPays(Boolean requesterPays) {
        this.requesterPays = requesterPays;
        return this;
    }
}