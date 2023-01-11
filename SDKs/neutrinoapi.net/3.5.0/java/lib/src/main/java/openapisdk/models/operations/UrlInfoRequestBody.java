package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UrlInfoRequestBody {
    @SpeakeasyMetadata("form:name=fetch-content")
    public Boolean fetchContent;
    public UrlInfoRequestBody withFetchContent(Boolean fetchContent) {
        this.fetchContent = fetchContent;
        return this;
    }
    @SpeakeasyMetadata("form:name=ignore-certificate-errors")
    public Boolean ignoreCertificateErrors;
    public UrlInfoRequestBody withIgnoreCertificateErrors(Boolean ignoreCertificateErrors) {
        this.ignoreCertificateErrors = ignoreCertificateErrors;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public UrlInfoRequestBodyOutputCaseEnum outputCase;
    public UrlInfoRequestBody withOutputCase(UrlInfoRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
    @SpeakeasyMetadata("form:name=retry")
    public Integer retry;
    public UrlInfoRequestBody withRetry(Integer retry) {
        this.retry = retry;
        return this;
    }
    @SpeakeasyMetadata("form:name=timeout")
    public Integer timeout;
    public UrlInfoRequestBody withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
    @SpeakeasyMetadata("form:name=url")
    public String url;
    public UrlInfoRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
}