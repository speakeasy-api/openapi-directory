package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Timezone {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abbr")
    public String abbr;
    public Timezone withAbbr(String abbr) {
        this.abbr = abbr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public Timezone withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Timezone withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Timezone withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public String time;
    public Timezone withTime(String time) {
        this.time = time;
        return this;
    }
}