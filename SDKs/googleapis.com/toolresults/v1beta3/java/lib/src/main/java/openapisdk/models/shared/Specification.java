package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Specification
 * The details about how to run the execution.
**/
public class Specification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidTest")
    public AndroidTest androidTest;
    public Specification withAndroidTest(AndroidTest androidTest) {
        this.androidTest = androidTest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosTest")
    public IosTest iosTest;
    public Specification withIosTest(IosTest iosTest) {
        this.iosTest = iosTest;
        return this;
    }
}