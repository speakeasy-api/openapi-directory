package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddOrDeleteRulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dry_run")
    public Boolean dryRun;
    public AddOrDeleteRulesQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
}