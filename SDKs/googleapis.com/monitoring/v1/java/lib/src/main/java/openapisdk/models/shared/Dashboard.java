package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Dashboard
 * A Google Stackdriver dashboard. Dashboards define the content and layout of pages in the Stackdriver web application.
**/
public class Dashboard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnLayout")
    public ColumnLayout columnLayout;
    public Dashboard withColumnLayout(ColumnLayout columnLayout) {
        this.columnLayout = columnLayout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dashboardFilters")
    public DashboardFilter[] dashboardFilters;
    public Dashboard withDashboardFilters(DashboardFilter[] dashboardFilters) {
        this.dashboardFilters = dashboardFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Dashboard withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Dashboard withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gridLayout")
    public GridLayout gridLayout;
    public Dashboard withGridLayout(GridLayout gridLayout) {
        this.gridLayout = gridLayout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Dashboard withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mosaicLayout")
    public MosaicLayout mosaicLayout;
    public Dashboard withMosaicLayout(MosaicLayout mosaicLayout) {
        this.mosaicLayout = mosaicLayout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Dashboard withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowLayout")
    public RowLayout rowLayout;
    public Dashboard withRowLayout(RowLayout rowLayout) {
        this.rowLayout = rowLayout;
        return this;
    }
}