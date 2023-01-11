package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSandboxSandboxIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sandboxId")
    public String sandboxId;
    public DeleteSandboxSandboxIdPathParams withSandboxId(String sandboxId) {
        this.sandboxId = sandboxId;
        return this;
    }
}