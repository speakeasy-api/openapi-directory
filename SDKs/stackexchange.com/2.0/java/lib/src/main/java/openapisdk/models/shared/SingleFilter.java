package openapisdk.models.shared;



public class SingleFilter {
    public String filter;
    public SingleFilter withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    public String filterType;
    public SingleFilter withFilterType(String filterType) {
        this.filterType = filterType;
        return this;
    }
    public Object[] includedFields;
    public SingleFilter withIncludedFields(Object[] includedFields) {
        this.includedFields = includedFields;
        return this;
    }
}