package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MethodMap
 * Deployment Manager will call these methods during the events of creation/deletion/update/get/setIamPolicy
**/
public class MethodMap {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("create")
    public String create;
    public MethodMap withCreate(String create) {
        this.create = create;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete")
    public String delete;
    public MethodMap withDelete(String delete) {
        this.delete = delete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("get")
    public String get;
    public MethodMap withGet(String get) {
        this.get = get;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setIamPolicy")
    public String setIamPolicy;
    public MethodMap withSetIamPolicy(String setIamPolicy) {
        this.setIamPolicy = setIamPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update")
    public String update;
    public MethodMap withUpdate(String update) {
        this.update = update;
        return this;
    }
}