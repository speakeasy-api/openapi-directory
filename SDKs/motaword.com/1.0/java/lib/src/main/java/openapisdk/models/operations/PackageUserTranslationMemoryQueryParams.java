package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackageUserTranslationMemoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=async")
    public Long async;
    public PackageUserTranslationMemoryQueryParams withAsync(Long async) {
        this.async = async;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public Long email;
    public PackageUserTranslationMemoryQueryParams withEmail(Long email) {
        this.email = email;
        return this;
    }
}