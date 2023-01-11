package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreditCardPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cardId")
    public Long cardId;
    public GetCreditCardPathParams withCardId(Long cardId) {
        this.cardId = cardId;
        return this;
    }
}