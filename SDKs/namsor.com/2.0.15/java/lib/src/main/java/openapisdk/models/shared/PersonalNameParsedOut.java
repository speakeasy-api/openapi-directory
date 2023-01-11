package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PersonalNameParsedOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstLastName")
    public FirstLastNameOut firstLastName;
    public PersonalNameParsedOut withFirstLastName(FirstLastNameOut firstLastName) {
        this.firstLastName = firstLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PersonalNameParsedOut withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PersonalNameParsedOut withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nameParserType")
    public String nameParserType;
    public PersonalNameParsedOut withNameParserType(String nameParserType) {
        this.nameParserType = nameParserType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nameParserTypeAlt")
    public String nameParserTypeAlt;
    public PersonalNameParsedOut withNameParserTypeAlt(String nameParserTypeAlt) {
        this.nameParserTypeAlt = nameParserTypeAlt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Double score;
    public PersonalNameParsedOut withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public PersonalNameParsedOut withScript(String script) {
        this.script = script;
        return this;
    }
}