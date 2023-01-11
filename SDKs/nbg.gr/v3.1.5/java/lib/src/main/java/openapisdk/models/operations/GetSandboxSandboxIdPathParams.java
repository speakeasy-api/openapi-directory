package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSandboxSandboxIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sandboxId")
    public String sandboxId;
    public GetSandboxSandboxIdPathParams withSandboxId(String sandboxId) {
        this.sandboxId = sandboxId;
        return this;
    }
}