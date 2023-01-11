package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudWebriskV1RiceDeltaEncoding
 * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
**/
public class GoogleCloudWebriskV1RiceDeltaEncoding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodedData")
    public String encodedData;
    public GoogleCloudWebriskV1RiceDeltaEncoding withEncodedData(String encodedData) {
        this.encodedData = encodedData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entryCount")
    public Integer entryCount;
    public GoogleCloudWebriskV1RiceDeltaEncoding withEntryCount(Integer entryCount) {
        this.entryCount = entryCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstValue")
    public String firstValue;
    public GoogleCloudWebriskV1RiceDeltaEncoding withFirstValue(String firstValue) {
        this.firstValue = firstValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("riceParameter")
    public Integer riceParameter;
    public GoogleCloudWebriskV1RiceDeltaEncoding withRiceParameter(Integer riceParameter) {
        this.riceParameter = riceParameter;
        return this;
    }
}