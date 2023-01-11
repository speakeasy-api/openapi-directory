package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OtoroshiHealth
 * The structure that represent current Otoroshi health
**/
public class OtoroshiHealth {
    @JsonProperty("datastore")
    public OtoroshiHealthDatastoreEnum datastore;
    public OtoroshiHealth withDatastore(OtoroshiHealthDatastoreEnum datastore) {
        this.datastore = datastore;
        return this;
    }
    @JsonProperty("otoroshi")
    public OtoroshiHealthOtoroshiEnum otoroshi;
    public OtoroshiHealth withOtoroshi(OtoroshiHealthOtoroshiEnum otoroshi) {
        this.otoroshi = otoroshi;
        return this;
    }
}