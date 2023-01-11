package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CveDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cvssv2")
    public CveDetailsCvssv2 cvssv2;
    public CveDetails withCvssv2(CveDetailsCvssv2 cvssv2) {
        this.cvssv2 = cvssv2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cvssv3")
    public CveDetailsCvssv3 cvssv3;
    public CveDetails withCvssv3(CveDetailsCvssv3 cvssv3) {
        this.cvssv3 = cvssv3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cweIds")
    public String[] cweIds;
    public CveDetails withCweIds(String[] cweIds) {
        this.cweIds = cweIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public LocalDate description;
    public CveDetails withDescription(LocalDate description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CveDetails withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedDate")
    public LocalDate lastModifiedDate;
    public CveDetails withLastModifiedDate(LocalDate lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishedDate")
    public LocalDate publishedDate;
    public CveDetails withPublishedDate(LocalDate publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
}