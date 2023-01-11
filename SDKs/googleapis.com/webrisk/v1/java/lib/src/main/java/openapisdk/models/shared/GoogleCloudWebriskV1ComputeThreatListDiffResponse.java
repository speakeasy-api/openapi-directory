package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudWebriskV1ComputeThreatListDiffResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additions")
    public GoogleCloudWebriskV1ThreatEntryAdditions additions;
    public GoogleCloudWebriskV1ComputeThreatListDiffResponse withAdditions(GoogleCloudWebriskV1ThreatEntryAdditions additions) {
        this.additions = additions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checksum")
    public GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum checksum;
    public GoogleCloudWebriskV1ComputeThreatListDiffResponse withChecksum(GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum checksum) {
        this.checksum = checksum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newVersionToken")
    public String newVersionToken;
    public GoogleCloudWebriskV1ComputeThreatListDiffResponse withNewVersionToken(String newVersionToken) {
        this.newVersionToken = newVersionToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendedNextDiff")
    public String recommendedNextDiff;
    public GoogleCloudWebriskV1ComputeThreatListDiffResponse withRecommendedNextDiff(String recommendedNextDiff) {
        this.recommendedNextDiff = recommendedNextDiff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removals")
    public GoogleCloudWebriskV1ThreatEntryRemovals removals;
    public GoogleCloudWebriskV1ComputeThreatListDiffResponse withRemovals(GoogleCloudWebriskV1ThreatEntryRemovals removals) {
        this.removals = removals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseType")
    public GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum responseType;
    public GoogleCloudWebriskV1ComputeThreatListDiffResponse withResponseType(GoogleCloudWebriskV1ComputeThreatListDiffResponseResponseTypeEnum responseType) {
        this.responseType = responseType;
        return this;
    }
}