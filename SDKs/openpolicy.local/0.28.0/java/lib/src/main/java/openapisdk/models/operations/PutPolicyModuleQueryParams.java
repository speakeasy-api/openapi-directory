package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPolicyModuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=metrics")
    public Boolean metrics;
    public PutPolicyModuleQueryParams withMetrics(Boolean metrics) {
        this.metrics = metrics;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pretty")
    public Boolean pretty;
    public PutPolicyModuleQueryParams withPretty(Boolean pretty) {
        this.pretty = pretty;
        return this;
    }
}