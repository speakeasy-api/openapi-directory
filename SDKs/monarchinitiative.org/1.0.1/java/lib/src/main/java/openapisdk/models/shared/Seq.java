package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Seq {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alphabet")
    public String alphabet;
    public Seq withAlphabet(String alphabet) {
        this.alphabet = alphabet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("association_counts")
    public java.util.Map<String, Object> associationCounts;
    public Seq withAssociationCounts(java.util.Map<String, Object> associationCounts) {
        this.associationCounts = associationCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String[] category;
    public Seq withCategory(String[] category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consider")
    public String[] consider;
    public Seq withConsider(String[] consider) {
        this.consider = consider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deprecated")
    public Boolean deprecated;
    public Seq withDeprecated(Boolean deprecated) {
        this.deprecated = deprecated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Seq withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Seq withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iri")
    public String iri;
    public Seq withIri(String iri) {
        this.iri = iri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public Seq withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("md5checksum")
    public String md5checksum;
    public Seq withMd5checksum(String md5checksum) {
        this.md5checksum = md5checksum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replaced_by")
    public String[] replacedBy;
    public Seq withReplacedBy(String[] replacedBy) {
        this.replacedBy = replacedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("residues")
    public String residues;
    public Seq withResidues(String residues) {
        this.residues = residues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seqlen")
    public String seqlen;
    public Seq withSeqlen(String seqlen) {
        this.seqlen = seqlen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("synonyms")
    public SynonymPropertyValue[] synonyms;
    public Seq withSynonyms(SynonymPropertyValue[] synonyms) {
        this.synonyms = synonyms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxon")
    public Taxon taxon;
    public Seq withTaxon(Taxon taxon) {
        this.taxon = taxon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("types")
    public String[] types;
    public Seq withTypes(String[] types) {
        this.types = types;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xrefs")
    public String[] xrefs;
    public Seq withXrefs(String[] xrefs) {
        this.xrefs = xrefs;
        return this;
    }
}