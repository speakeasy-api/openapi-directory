package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetValidity200ApplicationJsonData
 * Validation of API Key
**/
public class GetValidity200ApplicationJsonData {
    @JsonProperty("permissions")
    public String[] permissions;
    public GetValidity200ApplicationJsonData withPermissions(String[] permissions) {
        this.permissions = permissions;
        return this;
    }
}