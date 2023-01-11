package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNumbersAreacodes200ApplicationJson {
    @JsonProperty("id")
    public Long id;
    public GetNumbersAreacodes200ApplicationJson withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetNumbersAreacodes200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
}