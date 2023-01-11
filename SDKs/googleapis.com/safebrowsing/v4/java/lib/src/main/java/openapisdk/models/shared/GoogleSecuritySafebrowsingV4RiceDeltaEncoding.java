package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleSecuritySafebrowsingV4RiceDeltaEncoding
 * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
**/
public class GoogleSecuritySafebrowsingV4RiceDeltaEncoding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodedData")
    public String encodedData;
    public GoogleSecuritySafebrowsingV4RiceDeltaEncoding withEncodedData(String encodedData) {
        this.encodedData = encodedData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstValue")
    public String firstValue;
    public GoogleSecuritySafebrowsingV4RiceDeltaEncoding withFirstValue(String firstValue) {
        this.firstValue = firstValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numEntries")
    public Integer numEntries;
    public GoogleSecuritySafebrowsingV4RiceDeltaEncoding withNumEntries(Integer numEntries) {
        this.numEntries = numEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("riceParameter")
    public Integer riceParameter;
    public GoogleSecuritySafebrowsingV4RiceDeltaEncoding withRiceParameter(Integer riceParameter) {
        this.riceParameter = riceParameter;
        return this;
    }
}