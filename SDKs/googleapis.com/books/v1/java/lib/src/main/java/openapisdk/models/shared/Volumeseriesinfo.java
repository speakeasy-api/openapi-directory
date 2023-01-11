package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Volumeseriesinfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookDisplayNumber")
    public String bookDisplayNumber;
    public Volumeseriesinfo withBookDisplayNumber(String bookDisplayNumber) {
        this.bookDisplayNumber = bookDisplayNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Volumeseriesinfo withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortSeriesBookTitle")
    public String shortSeriesBookTitle;
    public Volumeseriesinfo withShortSeriesBookTitle(String shortSeriesBookTitle) {
        this.shortSeriesBookTitle = shortSeriesBookTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeSeries")
    public VolumeseriesinfoVolumeSeries[] volumeSeries;
    public Volumeseriesinfo withVolumeSeries(VolumeseriesinfoVolumeSeries[] volumeSeries) {
        this.volumeSeries = volumeSeries;
        return this;
    }
}