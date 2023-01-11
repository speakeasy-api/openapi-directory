package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BusinessServiceViewModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public BusinessServiceViewModel withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public BusinessServiceViewModel withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceId")
    public Integer serviceId;
    public BusinessServiceViewModel withServiceId(Integer serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public BusinessServiceViewModel withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}