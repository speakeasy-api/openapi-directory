package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUsAppToPersonCreateUsAppToPersonRequest {
    @SpeakeasyMetadata("form:name=BrandRegistrationSid")
    public String brandRegistrationSid;
    public CreateUsAppToPersonCreateUsAppToPersonRequest withBrandRegistrationSid(String brandRegistrationSid) {
        this.brandRegistrationSid = brandRegistrationSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Description")
    public String description;
    public CreateUsAppToPersonCreateUsAppToPersonRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("form:name=HasEmbeddedLinks")
    public Boolean hasEmbeddedLinks;
    public CreateUsAppToPersonCreateUsAppToPersonRequest withHasEmbeddedLinks(Boolean hasEmbeddedLinks) {
        this.hasEmbeddedLinks = hasEmbeddedLinks;
        return this;
    }
    @SpeakeasyMetadata("form:name=HasEmbeddedPhone")
    public Boolean hasEmbeddedPhone;
    public CreateUsAppToPersonCreateUsAppToPersonRequest withHasEmbeddedPhone(Boolean hasEmbeddedPhone) {
        this.hasEmbeddedPhone = hasEmbeddedPhone;
        return this;
    }
    @SpeakeasyMetadata("form:name=HelpKeywords")
    public String[] helpKeywords;
    public CreateUsAppToPersonCreateUsAppToPersonRequest withHelpKeywords(String[] helpKeywords) {
        this.helpKeywords = helpKeywords;
        return this;
    }
    @SpeakeasyMetadata("form:name=HelpMessage")
    public String helpMessage;
    public CreateUsAppToPersonCreateUsAppToPersonRequest withHelpMessage(String helpMessage) {
        this.helpMessage = helpMessage;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessageFlow")
    public String messageFlow;
    public CreateUsAppToPersonCreateUsAppToPersonRequest withMessageFlow(String messageFlow) {
        this.messageFlow = messageFlow;
        return this;
    }
    @SpeakeasyMetadata("form:name=MessageSamples")
    public String[] messageSamples;
    public CreateUsAppToPersonCreateUsAppToPersonRequest withMessageSamples(String[] messageSamples) {
        this.messageSamples = messageSamples;
        return this;
    }
    @SpeakeasyMetadata("form:name=OptInKeywords")
    public String[] optInKeywords;
    public CreateUsAppToPersonCreateUsAppToPersonRequest withOptInKeywords(String[] optInKeywords) {
        this.optInKeywords = optInKeywords;
        return this;
    }
    @SpeakeasyMetadata("form:name=OptInMessage")
    public String optInMessage;
    public CreateUsAppToPersonCreateUsAppToPersonRequest withOptInMessage(String optInMessage) {
        this.optInMessage = optInMessage;
        return this;
    }
    @SpeakeasyMetadata("form:name=OptOutKeywords")
    public String[] optOutKeywords;
    public CreateUsAppToPersonCreateUsAppToPersonRequest withOptOutKeywords(String[] optOutKeywords) {
        this.optOutKeywords = optOutKeywords;
        return this;
    }
    @SpeakeasyMetadata("form:name=OptOutMessage")
    public String optOutMessage;
    public CreateUsAppToPersonCreateUsAppToPersonRequest withOptOutMessage(String optOutMessage) {
        this.optOutMessage = optOutMessage;
        return this;
    }
    @SpeakeasyMetadata("form:name=UsAppToPersonUsecase")
    public String usAppToPersonUsecase;
    public CreateUsAppToPersonCreateUsAppToPersonRequest withUsAppToPersonUsecase(String usAppToPersonUsecase) {
        this.usAppToPersonUsecase = usAppToPersonUsecase;
        return this;
    }
}