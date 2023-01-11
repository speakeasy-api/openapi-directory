package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applePassSupported")
    public Boolean applePassSupported;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withApplePassSupported(Boolean applePassSupported) {
        this.applePassSupported = applePassSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barcodeOption")
    public String barcodeOption;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withBarcodeOption(String barcodeOption) {
        this.barcodeOption = barcodeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barcodeType")
    public String barcodeType;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withBarcodeType(String barcodeType) {
        this.barcodeType = barcodeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingEngineId")
    public openapisdk.models.shared.BookingEngineIdResponseEnum bookingEngineId;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withBookingEngineId(openapisdk.models.shared.BookingEngineIdResponseEnum bookingEngineId) {
        this.bookingEngineId = bookingEngineId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingStatus")
    public openapisdk.models.shared.BookingStatusItem bookingStatus;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withBookingStatus(openapisdk.models.shared.BookingStatusItem bookingStatus) {
        this.bookingStatus = bookingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departsFrom")
    public String departsFrom;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withDepartsFrom(String departsFrom) {
        this.departsFrom = departsFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departurePoint")
    public String departurePoint;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withDeparturePoint(String departurePoint) {
        this.departurePoint = departurePoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departurePointAddress")
    public String departurePointAddress;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withDeparturePointAddress(String departurePointAddress) {
        this.departurePointAddress = departurePointAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departurePointDirections")
    public String departurePointDirections;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withDeparturePointDirections(String departurePointDirections) {
        this.departurePointDirections = departurePointDirections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destId")
    public Long destId;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withDestId(Long destId) {
        this.destId = destId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorItemRef")
    public String distributorItemRef;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withDistributorItemRef(String distributorItemRef) {
        this.distributorItemRef = distributorItemRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hoursConfirmed")
    public Long hoursConfirmed;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withHoursConfirmed(Long hoursConfirmed) {
        this.hoursConfirmed = hoursConfirmed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public Long itemId;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withItemId(Long itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itineraryId")
    public Long itineraryId;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withItineraryId(Long itineraryId) {
        this.itineraryId = itineraryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageServicesLanguageCode")
    public String languageServicesLanguageCode;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withLanguageServicesLanguageCode(String languageServicesLanguageCode) {
        this.languageServicesLanguageCode = languageServicesLanguageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRetailPrice")
    public Double lastRetailPrice;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withLastRetailPrice(Double lastRetailPrice) {
        this.lastRetailPrice = lastRetailPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRetailPriceFormatted")
    public String lastRetailPriceFormatted;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withLastRetailPriceFormatted(String lastRetailPriceFormatted) {
        this.lastRetailPriceFormatted = lastRetailPriceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadTravellerFirstname")
    public String leadTravellerFirstname;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withLeadTravellerFirstname(String leadTravellerFirstname) {
        this.leadTravellerFirstname = leadTravellerFirstname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadTravellerSurname")
    public String leadTravellerSurname;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withLeadTravellerSurname(String leadTravellerSurname) {
        this.leadTravellerSurname = leadTravellerSurname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadTravellerTitle")
    public String leadTravellerTitle;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withLeadTravellerTitle(String leadTravellerTitle) {
        this.leadTravellerTitle = leadTravellerTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantCancellable")
    public Boolean merchantCancellable;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withMerchantCancellable(Boolean merchantCancellable) {
        this.merchantCancellable = merchantCancellable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPrice")
    public Double merchantNetPrice;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withMerchantNetPrice(Double merchantNetPrice) {
        this.merchantNetPrice = merchantNetPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPriceFormatted")
    public String merchantNetPriceFormatted;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withMerchantNetPriceFormatted(String merchantNetPriceFormatted) {
        this.merchantNetPriceFormatted = merchantNetPriceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obfsId")
    public Long obfsId;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withObfsId(Long obfsId) {
        this.obfsId = obfsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passbooks")
    public String passbooks;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withPassbooks(String passbooks) {
        this.passbooks = passbooks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupHotelId")
    public Long pickupHotelId;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withPickupHotelId(Long pickupHotelId) {
        this.pickupHotelId = pickupHotelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupHotelName")
    public String pickupHotelName;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withPickupHotelName(String pickupHotelName) {
        this.pickupHotelName = pickupHotelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceFormatted")
    public String priceFormatted;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withPriceFormatted(String priceFormatted) {
        this.priceFormatted = priceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceUSD")
    public Double priceUSD;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withPriceUsd(Double priceUSD) {
        this.priceUSD = priceUSD;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productPulledDown")
    public Boolean productPulledDown;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withProductPulledDown(Boolean productPulledDown) {
        this.productPulledDown = productPulledDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productTitle")
    public String productTitle;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withProductTitle(String productTitle) {
        this.productTitle = productTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productWidgetList")
    public String productWidgetList;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withProductWidgetList(String productWidgetList) {
        this.productWidgetList = productWidgetList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rulesApplied")
    public String[] rulesApplied;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withRulesApplied(String[] rulesApplied) {
        this.rulesApplied = rulesApplied;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingAmount")
    public String savingAmount;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withSavingAmount(String savingAmount) {
        this.savingAmount = savingAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingAmountFormated")
    public String savingAmountFormated;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withSavingAmountFormated(String savingAmountFormated) {
        this.savingAmountFormated = savingAmountFormated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startingTime")
    public String startingTime;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withStartingTime(String startingTime) {
        this.startingTime = startingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplierName")
    public String supplierName;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withSupplierName(String supplierName) {
        this.supplierName = supplierName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplierPhoneNumber")
    public String supplierPhoneNumber;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withSupplierPhoneNumber(String supplierPhoneNumber) {
        this.supplierPhoneNumber = supplierPhoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsAndConditions")
    public String termsAndConditions;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withTermsAndConditions(String termsAndConditions) {
        this.termsAndConditions = termsAndConditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tourGradeCode")
    public String tourGradeCode;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withTourGradeCode(String tourGradeCode) {
        this.tourGradeCode = tourGradeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tourGradeDescription")
    public String tourGradeDescription;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withTourGradeDescription(String tourGradeDescription) {
        this.tourGradeDescription = tourGradeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("travelDate")
    public String travelDate;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withTravelDate(String travelDate) {
        this.travelDate = travelDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("travellerAgeBands")
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands[] travellerAgeBands;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withTravellerAgeBands(BookingCalculateprice200ApplicationJsonDataItineraryItemSummariesTravellerAgeBands[] travellerAgeBands) {
        this.travellerAgeBands = travellerAgeBands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherKey")
    public String voucherKey;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withVoucherKey(String voucherKey) {
        this.voucherKey = voucherKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherOption")
    public String voucherOption;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withVoucherOption(String voucherOption) {
        this.voucherOption = voucherOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherRequirements")
    public String voucherRequirements;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withVoucherRequirements(String voucherRequirements) {
        this.voucherRequirements = voucherRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherURL")
    public String voucherURL;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withVoucherUrl(String voucherURL) {
        this.voucherURL = voucherURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vouchers")
    public String vouchers;
    public BookingCalculateprice200ApplicationJsonDataItineraryItemSummaries withVouchers(String vouchers) {
        this.vouchers = vouchers;
        return this;
    }
}