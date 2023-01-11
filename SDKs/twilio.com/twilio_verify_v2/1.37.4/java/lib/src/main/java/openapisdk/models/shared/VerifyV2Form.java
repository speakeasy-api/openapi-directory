package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerifyV2Form {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_meta")
    public Object formMeta;
    public VerifyV2Form withFormMeta(Object formMeta) {
        this.formMeta = formMeta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_type")
    public FormEnumFormTypesEnum formType;
    public VerifyV2Form withFormType(FormEnumFormTypesEnum formType) {
        this.formType = formType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forms")
    public Object forms;
    public VerifyV2Form withForms(Object forms) {
        this.forms = forms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public VerifyV2Form withUrl(String url) {
        this.url = url;
        return this;
    }
}