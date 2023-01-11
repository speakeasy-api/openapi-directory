package openapisdk.models.shared;



public class TagSynonyms {
    public Long appliedCount;
    public TagSynonyms withAppliedCount(Long appliedCount) {
        this.appliedCount = appliedCount;
        return this;
    }
    public Long creationDate;
    public TagSynonyms withCreationDate(Long creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    public String fromTag;
    public TagSynonyms withFromTag(String fromTag) {
        this.fromTag = fromTag;
        return this;
    }
    public Long lastAppliedDate;
    public TagSynonyms withLastAppliedDate(Long lastAppliedDate) {
        this.lastAppliedDate = lastAppliedDate;
        return this;
    }
    public String toTag;
    public TagSynonyms withToTag(String toTag) {
        this.toTag = toTag;
        return this;
    }
}