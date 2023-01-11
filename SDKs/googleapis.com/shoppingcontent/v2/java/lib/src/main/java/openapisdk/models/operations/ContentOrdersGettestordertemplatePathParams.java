package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContentOrdersGettestordertemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merchantId")
    public String merchantId;
    public ContentOrdersGettestordertemplatePathParams withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=templateName")
    public ContentOrdersGettestordertemplateTemplateNameEnum templateName;
    public ContentOrdersGettestordertemplatePathParams withTemplateName(ContentOrdersGettestordertemplateTemplateNameEnum templateName) {
        this.templateName = templateName;
        return this;
    }
}