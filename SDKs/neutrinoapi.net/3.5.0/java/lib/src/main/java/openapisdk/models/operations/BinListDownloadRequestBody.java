package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinListDownloadRequestBody {
    @SpeakeasyMetadata("form:name=include-8digit")
    public Boolean include8digit;
    public BinListDownloadRequestBody withInclude8digit(Boolean include8digit) {
        this.include8digit = include8digit;
        return this;
    }
    @SpeakeasyMetadata("form:name=include-iso3")
    public Boolean includeIso3;
    public BinListDownloadRequestBody withIncludeIso3(Boolean includeIso3) {
        this.includeIso3 = includeIso3;
        return this;
    }
}