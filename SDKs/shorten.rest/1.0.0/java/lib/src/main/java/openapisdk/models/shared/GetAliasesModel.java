package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAliasesModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aliases")
    public String[] aliases;
    public GetAliasesModel withAliases(String[] aliases) {
        this.aliases = aliases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastId")
    public String lastId;
    public GetAliasesModel withLastId(String lastId) {
        this.lastId = lastId;
        return this;
    }
}