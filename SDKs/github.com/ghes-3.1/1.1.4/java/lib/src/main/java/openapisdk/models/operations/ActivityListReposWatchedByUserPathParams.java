package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivityListReposWatchedByUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public ActivityListReposWatchedByUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}