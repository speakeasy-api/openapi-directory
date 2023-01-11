package openapisdk.models.shared;



/**
 * ResultPage
 * Encapsulates a list of results.
**/
public class ResultPage {
    public java.util.Map<String, Object>[] items;
    public ResultPage withItems(java.util.Map<String, Object>[] items) {
        this.items = items;
        return this;
    }
    public Boolean restrictedRights;
    public ResultPage withRestrictedRights(Boolean restrictedRights) {
        this.restrictedRights = restrictedRights;
        return this;
    }
    public Long total;
    public ResultPage withTotal(Long total) {
        this.total = total;
        return this;
    }
}