package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BadWordFilterRequestBody {
    @SpeakeasyMetadata("form:name=catalog")
    public String catalog;
    public BadWordFilterRequestBody withCatalog(String catalog) {
        this.catalog = catalog;
        return this;
    }
    @SpeakeasyMetadata("form:name=censor-character")
    public String censorCharacter;
    public BadWordFilterRequestBody withCensorCharacter(String censorCharacter) {
        this.censorCharacter = censorCharacter;
        return this;
    }
    @SpeakeasyMetadata("form:name=content")
    public String content;
    public BadWordFilterRequestBody withContent(String content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("form:name=output-case")
    public BadWordFilterRequestBodyOutputCaseEnum outputCase;
    public BadWordFilterRequestBody withOutputCase(BadWordFilterRequestBodyOutputCaseEnum outputCase) {
        this.outputCase = outputCase;
        return this;
    }
}