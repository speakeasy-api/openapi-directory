package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResponsePolicyRuleLocalData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localDatas")
    public ResourceRecordSet[] localDatas;
    public ResponsePolicyRuleLocalData withLocalDatas(ResourceRecordSet[] localDatas) {
        this.localDatas = localDatas;
        return this;
    }
}