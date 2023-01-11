package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResetCardPaymentCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cardId")
    public Long cardId;
    public ResetCardPaymentCodePathParams withCardId(Long cardId) {
        this.cardId = cardId;
        return this;
    }
}