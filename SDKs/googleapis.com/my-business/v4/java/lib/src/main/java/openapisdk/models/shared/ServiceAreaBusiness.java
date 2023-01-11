package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceAreaBusiness
 * Service area businesses provide their service at the customer's location (for example, a locksmith or plumber).
**/
public class ServiceAreaBusiness {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessType")
    public ServiceAreaBusinessBusinessTypeEnum businessType;
    public ServiceAreaBusiness withBusinessType(ServiceAreaBusinessBusinessTypeEnum businessType) {
        this.businessType = businessType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("places")
    public Places places;
    public ServiceAreaBusiness withPlaces(Places places) {
        this.places = places;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("radius")
    public PointRadius radius;
    public ServiceAreaBusiness withRadius(PointRadius radius) {
        this.radius = radius;
        return this;
    }
}