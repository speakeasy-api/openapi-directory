package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Getweatherzipcode200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("City")
    public String city;
    public Getweatherzipcode200ApplicationJson withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public Getweatherzipcode200ApplicationJson withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Credits")
    public String credits;
    public Getweatherzipcode200ApplicationJson withCredits(String credits) {
        this.credits = credits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RelativeHumidity")
    public String relativeHumidity;
    public Getweatherzipcode200ApplicationJson withRelativeHumidity(String relativeHumidity) {
        this.relativeHumidity = relativeHumidity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public String state;
    public Getweatherzipcode200ApplicationJson withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TempC")
    public String tempC;
    public Getweatherzipcode200ApplicationJson withTempC(String tempC) {
        this.tempC = tempC;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TempF")
    public String tempF;
    public Getweatherzipcode200ApplicationJson withTempF(String tempF) {
        this.tempF = tempF;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VisibilityMiles")
    public String visibilityMiles;
    public Getweatherzipcode200ApplicationJson withVisibilityMiles(String visibilityMiles) {
        this.visibilityMiles = visibilityMiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Weather")
    public String weather;
    public Getweatherzipcode200ApplicationJson withWeather(String weather) {
        this.weather = weather;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WindDir")
    public String windDir;
    public Getweatherzipcode200ApplicationJson withWindDir(String windDir) {
        this.windDir = windDir;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WindMPH")
    public String windMPH;
    public Getweatherzipcode200ApplicationJson withWindMph(String windMPH) {
        this.windMPH = windMPH;
        return this;
    }
}