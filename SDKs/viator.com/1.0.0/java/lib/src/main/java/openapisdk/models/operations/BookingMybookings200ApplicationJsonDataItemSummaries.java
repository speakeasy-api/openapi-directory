package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingMybookings200ApplicationJsonDataItemSummaries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barcodeOption")
    public String barcodeOption;
    public BookingMybookings200ApplicationJsonDataItemSummaries withBarcodeOption(String barcodeOption) {
        this.barcodeOption = barcodeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barcodeType")
    public String barcodeType;
    public BookingMybookings200ApplicationJsonDataItemSummaries withBarcodeType(String barcodeType) {
        this.barcodeType = barcodeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingEngineId")
    public openapisdk.models.shared.BookingEngineIdResponseEnum bookingEngineId;
    public BookingMybookings200ApplicationJsonDataItemSummaries withBookingEngineId(openapisdk.models.shared.BookingEngineIdResponseEnum bookingEngineId) {
        this.bookingEngineId = bookingEngineId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingStatus")
    public openapisdk.models.shared.BookingStatusItem bookingStatus;
    public BookingMybookings200ApplicationJsonDataItemSummaries withBookingStatus(openapisdk.models.shared.BookingStatusItem bookingStatus) {
        this.bookingStatus = bookingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BookingMybookings200ApplicationJsonDataItemSummaries withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departsFrom")
    public String departsFrom;
    public BookingMybookings200ApplicationJsonDataItemSummaries withDepartsFrom(String departsFrom) {
        this.departsFrom = departsFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departurePoint")
    public String departurePoint;
    public BookingMybookings200ApplicationJsonDataItemSummaries withDeparturePoint(String departurePoint) {
        this.departurePoint = departurePoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departurePointAddress")
    public String departurePointAddress;
    public BookingMybookings200ApplicationJsonDataItemSummaries withDeparturePointAddress(String departurePointAddress) {
        this.departurePointAddress = departurePointAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departurePointDirections")
    public String departurePointDirections;
    public BookingMybookings200ApplicationJsonDataItemSummaries withDeparturePointDirections(String departurePointDirections) {
        this.departurePointDirections = departurePointDirections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destId")
    public Long destId;
    public BookingMybookings200ApplicationJsonDataItemSummaries withDestId(Long destId) {
        this.destId = destId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorItemRef")
    public String distributorItemRef;
    public BookingMybookings200ApplicationJsonDataItemSummaries withDistributorItemRef(String distributorItemRef) {
        this.distributorItemRef = distributorItemRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hoursConfirmed")
    public Long hoursConfirmed;
    public BookingMybookings200ApplicationJsonDataItemSummaries withHoursConfirmed(Long hoursConfirmed) {
        this.hoursConfirmed = hoursConfirmed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public String itemId;
    public BookingMybookings200ApplicationJsonDataItemSummaries withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itineraryId")
    public Long itineraryId;
    public BookingMybookings200ApplicationJsonDataItemSummaries withItineraryId(Long itineraryId) {
        this.itineraryId = itineraryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageServicesLanguageCode")
    public String languageServicesLanguageCode;
    public BookingMybookings200ApplicationJsonDataItemSummaries withLanguageServicesLanguageCode(String languageServicesLanguageCode) {
        this.languageServicesLanguageCode = languageServicesLanguageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRetailPrice")
    public Double lastRetailPrice;
    public BookingMybookings200ApplicationJsonDataItemSummaries withLastRetailPrice(Double lastRetailPrice) {
        this.lastRetailPrice = lastRetailPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRetailPriceFormatted")
    public String lastRetailPriceFormatted;
    public BookingMybookings200ApplicationJsonDataItemSummaries withLastRetailPriceFormatted(String lastRetailPriceFormatted) {
        this.lastRetailPriceFormatted = lastRetailPriceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadTravellerFirstname")
    public String leadTravellerFirstname;
    public BookingMybookings200ApplicationJsonDataItemSummaries withLeadTravellerFirstname(String leadTravellerFirstname) {
        this.leadTravellerFirstname = leadTravellerFirstname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadTravellerSurname")
    public String leadTravellerSurname;
    public BookingMybookings200ApplicationJsonDataItemSummaries withLeadTravellerSurname(String leadTravellerSurname) {
        this.leadTravellerSurname = leadTravellerSurname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadTravellerTitle")
    public String leadTravellerTitle;
    public BookingMybookings200ApplicationJsonDataItemSummaries withLeadTravellerTitle(String leadTravellerTitle) {
        this.leadTravellerTitle = leadTravellerTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantCancellable")
    public Boolean merchantCancellable;
    public BookingMybookings200ApplicationJsonDataItemSummaries withMerchantCancellable(Boolean merchantCancellable) {
        this.merchantCancellable = merchantCancellable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPrice")
    public Double merchantNetPrice;
    public BookingMybookings200ApplicationJsonDataItemSummaries withMerchantNetPrice(Double merchantNetPrice) {
        this.merchantNetPrice = merchantNetPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPriceFormatted")
    public String merchantNetPriceFormatted;
    public BookingMybookings200ApplicationJsonDataItemSummaries withMerchantNetPriceFormatted(String merchantNetPriceFormatted) {
        this.merchantNetPriceFormatted = merchantNetPriceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantTermsAndConditions")
    public BookingMybookings200ApplicationJsonDataItemSummariesMerchantTermsAndConditions merchantTermsAndConditions;
    public BookingMybookings200ApplicationJsonDataItemSummaries withMerchantTermsAndConditions(BookingMybookings200ApplicationJsonDataItemSummariesMerchantTermsAndConditions merchantTermsAndConditions) {
        this.merchantTermsAndConditions = merchantTermsAndConditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obfsId")
    public String obfsId;
    public BookingMybookings200ApplicationJsonDataItemSummaries withObfsId(String obfsId) {
        this.obfsId = obfsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passbooks")
    public String passbooks;
    public BookingMybookings200ApplicationJsonDataItemSummaries withPassbooks(String passbooks) {
        this.passbooks = passbooks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public BookingMybookings200ApplicationJsonDataItemSummaries withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceFormatted")
    public String priceFormatted;
    public BookingMybookings200ApplicationJsonDataItemSummaries withPriceFormatted(String priceFormatted) {
        this.priceFormatted = priceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceUSD")
    public Double priceUSD;
    public BookingMybookings200ApplicationJsonDataItemSummaries withPriceUsd(Double priceUSD) {
        this.priceUSD = priceUSD;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public BookingMybookings200ApplicationJsonDataItemSummaries withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productPulledDown")
    public Boolean productPulledDown;
    public BookingMybookings200ApplicationJsonDataItemSummaries withProductPulledDown(Boolean productPulledDown) {
        this.productPulledDown = productPulledDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productTitle")
    public String productTitle;
    public BookingMybookings200ApplicationJsonDataItemSummaries withProductTitle(String productTitle) {
        this.productTitle = productTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productWidgetList")
    public String productWidgetList;
    public BookingMybookings200ApplicationJsonDataItemSummaries withProductWidgetList(String productWidgetList) {
        this.productWidgetList = productWidgetList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rulesApplied")
    public String rulesApplied;
    public BookingMybookings200ApplicationJsonDataItemSummaries withRulesApplied(String rulesApplied) {
        this.rulesApplied = rulesApplied;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingAmount")
    public String savingAmount;
    public BookingMybookings200ApplicationJsonDataItemSummaries withSavingAmount(String savingAmount) {
        this.savingAmount = savingAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingAmountFormated")
    public String savingAmountFormated;
    public BookingMybookings200ApplicationJsonDataItemSummaries withSavingAmountFormated(String savingAmountFormated) {
        this.savingAmountFormated = savingAmountFormated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingMybookings200ApplicationJsonDataItemSummaries withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsAndConditions")
    public String termsAndConditions;
    public BookingMybookings200ApplicationJsonDataItemSummaries withTermsAndConditions(String termsAndConditions) {
        this.termsAndConditions = termsAndConditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tourGradeCode")
    public String tourGradeCode;
    public BookingMybookings200ApplicationJsonDataItemSummaries withTourGradeCode(String tourGradeCode) {
        this.tourGradeCode = tourGradeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tourGradeDescription")
    public String tourGradeDescription;
    public BookingMybookings200ApplicationJsonDataItemSummaries withTourGradeDescription(String tourGradeDescription) {
        this.tourGradeDescription = tourGradeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("travelDate")
    public String travelDate;
    public BookingMybookings200ApplicationJsonDataItemSummaries withTravelDate(String travelDate) {
        this.travelDate = travelDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("travellerAgeBands")
    public BookingMybookings200ApplicationJsonDataItemSummariesTravellerAgeBands[] travellerAgeBands;
    public BookingMybookings200ApplicationJsonDataItemSummaries withTravellerAgeBands(BookingMybookings200ApplicationJsonDataItemSummariesTravellerAgeBands[] travellerAgeBands) {
        this.travellerAgeBands = travellerAgeBands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherKey")
    public String voucherKey;
    public BookingMybookings200ApplicationJsonDataItemSummaries withVoucherKey(String voucherKey) {
        this.voucherKey = voucherKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherOption")
    public String voucherOption;
    public BookingMybookings200ApplicationJsonDataItemSummaries withVoucherOption(String voucherOption) {
        this.voucherOption = voucherOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherRequirements")
    public String voucherRequirements;
    public BookingMybookings200ApplicationJsonDataItemSummaries withVoucherRequirements(String voucherRequirements) {
        this.voucherRequirements = voucherRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherURL")
    public String voucherURL;
    public BookingMybookings200ApplicationJsonDataItemSummaries withVoucherUrl(String voucherURL) {
        this.voucherURL = voucherURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vouchers")
    public String vouchers;
    public BookingMybookings200ApplicationJsonDataItemSummaries withVouchers(String vouchers) {
        this.vouchers = vouchers;
        return this;
    }
}