package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CodeScanningUpdateAlertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=alert_number")
    public Long alertNumber;
    public CodeScanningUpdateAlertPathParams withAlertNumber(Long alertNumber) {
        this.alertNumber = alertNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public CodeScanningUpdateAlertPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public CodeScanningUpdateAlertPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}