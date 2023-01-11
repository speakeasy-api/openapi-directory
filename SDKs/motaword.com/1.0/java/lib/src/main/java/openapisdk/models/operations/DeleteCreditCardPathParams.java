package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCreditCardPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=cardId")
    public Long cardId;
    public DeleteCreditCardPathParams withCardId(Long cardId) {
        this.cardId = cardId;
        return this;
    }
}