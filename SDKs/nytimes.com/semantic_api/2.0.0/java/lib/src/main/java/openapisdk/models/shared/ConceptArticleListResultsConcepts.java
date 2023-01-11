package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConceptArticleListResultsConcepts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nytd_des")
    public String[] nytdDes;
    public ConceptArticleListResultsConcepts withNytdDes(String[] nytdDes) {
        this.nytdDes = nytdDes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nytd_org")
    public String[] nytdOrg;
    public ConceptArticleListResultsConcepts withNytdOrg(String[] nytdOrg) {
        this.nytdOrg = nytdOrg;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nytd_per")
    public String[] nytdPer;
    public ConceptArticleListResultsConcepts withNytdPer(String[] nytdPer) {
        this.nytdPer = nytdPer;
        return this;
    }
}