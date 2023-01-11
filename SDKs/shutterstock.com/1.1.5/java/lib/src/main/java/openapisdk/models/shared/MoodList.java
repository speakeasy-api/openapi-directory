package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * MoodList
 * List of audio moods
**/
public class MoodList {
    @JsonProperty("data")
    public String[] data;
    public MoodList withData(String[] data) {
        this.data = data;
        return this;
    }
}