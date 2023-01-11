package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Services
 * Conveniences or help provided by the property to facilitate an easier, more comfortable stay.
**/
public class Services {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baggageStorage")
    public Boolean baggageStorage;
    public Services withBaggageStorage(Boolean baggageStorage) {
        this.baggageStorage = baggageStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baggageStorageException")
    public ServicesBaggageStorageExceptionEnum baggageStorageException;
    public Services withBaggageStorageException(ServicesBaggageStorageExceptionEnum baggageStorageException) {
        this.baggageStorageException = baggageStorageException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("concierge")
    public Boolean concierge;
    public Services withConcierge(Boolean concierge) {
        this.concierge = concierge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conciergeException")
    public ServicesConciergeExceptionEnum conciergeException;
    public Services withConciergeException(ServicesConciergeExceptionEnum conciergeException) {
        this.conciergeException = conciergeException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("convenienceStore")
    public Boolean convenienceStore;
    public Services withConvenienceStore(Boolean convenienceStore) {
        this.convenienceStore = convenienceStore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("convenienceStoreException")
    public ServicesConvenienceStoreExceptionEnum convenienceStoreException;
    public Services withConvenienceStoreException(ServicesConvenienceStoreExceptionEnum convenienceStoreException) {
        this.convenienceStoreException = convenienceStoreException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyExchange")
    public Boolean currencyExchange;
    public Services withCurrencyExchange(Boolean currencyExchange) {
        this.currencyExchange = currencyExchange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyExchangeException")
    public ServicesCurrencyExchangeExceptionEnum currencyExchangeException;
    public Services withCurrencyExchangeException(ServicesCurrencyExchangeExceptionEnum currencyExchangeException) {
        this.currencyExchangeException = currencyExchangeException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elevator")
    public Boolean elevator;
    public Services withElevator(Boolean elevator) {
        this.elevator = elevator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elevatorException")
    public ServicesElevatorExceptionEnum elevatorException;
    public Services withElevatorException(ServicesElevatorExceptionEnum elevatorException) {
        this.elevatorException = elevatorException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frontDesk")
    public Boolean frontDesk;
    public Services withFrontDesk(Boolean frontDesk) {
        this.frontDesk = frontDesk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frontDeskException")
    public ServicesFrontDeskExceptionEnum frontDeskException;
    public Services withFrontDeskException(ServicesFrontDeskExceptionEnum frontDeskException) {
        this.frontDeskException = frontDeskException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullServiceLaundry")
    public Boolean fullServiceLaundry;
    public Services withFullServiceLaundry(Boolean fullServiceLaundry) {
        this.fullServiceLaundry = fullServiceLaundry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullServiceLaundryException")
    public ServicesFullServiceLaundryExceptionEnum fullServiceLaundryException;
    public Services withFullServiceLaundryException(ServicesFullServiceLaundryExceptionEnum fullServiceLaundryException) {
        this.fullServiceLaundryException = fullServiceLaundryException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("giftShop")
    public Boolean giftShop;
    public Services withGiftShop(Boolean giftShop) {
        this.giftShop = giftShop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("giftShopException")
    public ServicesGiftShopExceptionEnum giftShopException;
    public Services withGiftShopException(ServicesGiftShopExceptionEnum giftShopException) {
        this.giftShopException = giftShopException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languagesSpoken")
    public LanguagesSpoken languagesSpoken;
    public Services withLanguagesSpoken(LanguagesSpoken languagesSpoken) {
        this.languagesSpoken = languagesSpoken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfServiceLaundry")
    public Boolean selfServiceLaundry;
    public Services withSelfServiceLaundry(Boolean selfServiceLaundry) {
        this.selfServiceLaundry = selfServiceLaundry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfServiceLaundryException")
    public ServicesSelfServiceLaundryExceptionEnum selfServiceLaundryException;
    public Services withSelfServiceLaundryException(ServicesSelfServiceLaundryExceptionEnum selfServiceLaundryException) {
        this.selfServiceLaundryException = selfServiceLaundryException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("socialHour")
    public Boolean socialHour;
    public Services withSocialHour(Boolean socialHour) {
        this.socialHour = socialHour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("socialHourException")
    public ServicesSocialHourExceptionEnum socialHourException;
    public Services withSocialHourException(ServicesSocialHourExceptionEnum socialHourException) {
        this.socialHourException = socialHourException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twentyFourHourFrontDesk")
    public Boolean twentyFourHourFrontDesk;
    public Services withTwentyFourHourFrontDesk(Boolean twentyFourHourFrontDesk) {
        this.twentyFourHourFrontDesk = twentyFourHourFrontDesk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twentyFourHourFrontDeskException")
    public ServicesTwentyFourHourFrontDeskExceptionEnum twentyFourHourFrontDeskException;
    public Services withTwentyFourHourFrontDeskException(ServicesTwentyFourHourFrontDeskExceptionEnum twentyFourHourFrontDeskException) {
        this.twentyFourHourFrontDeskException = twentyFourHourFrontDeskException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wakeUpCalls")
    public Boolean wakeUpCalls;
    public Services withWakeUpCalls(Boolean wakeUpCalls) {
        this.wakeUpCalls = wakeUpCalls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wakeUpCallsException")
    public ServicesWakeUpCallsExceptionEnum wakeUpCallsException;
    public Services withWakeUpCallsException(ServicesWakeUpCallsExceptionEnum wakeUpCallsException) {
        this.wakeUpCallsException = wakeUpCallsException;
        return this;
    }
}