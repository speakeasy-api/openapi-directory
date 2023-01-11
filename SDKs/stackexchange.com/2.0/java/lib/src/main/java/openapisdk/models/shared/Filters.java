package openapisdk.models.shared;



public class Filters {
    public String filter;
    public Filters withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    public String filterType;
    public Filters withFilterType(String filterType) {
        this.filterType = filterType;
        return this;
    }
    public Object[] includedFields;
    public Filters withIncludedFields(Object[] includedFields) {
        this.includedFields = includedFields;
        return this;
    }
}