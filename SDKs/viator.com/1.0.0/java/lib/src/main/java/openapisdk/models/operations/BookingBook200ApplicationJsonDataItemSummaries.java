package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingBook200ApplicationJsonDataItemSummaries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applePassSupported")
    public Boolean applePassSupported;
    public BookingBook200ApplicationJsonDataItemSummaries withApplePassSupported(Boolean applePassSupported) {
        this.applePassSupported = applePassSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barcodeOption")
    public String barcodeOption;
    public BookingBook200ApplicationJsonDataItemSummaries withBarcodeOption(String barcodeOption) {
        this.barcodeOption = barcodeOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barcodeType")
    public String barcodeType;
    public BookingBook200ApplicationJsonDataItemSummaries withBarcodeType(String barcodeType) {
        this.barcodeType = barcodeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingEngineId")
    public openapisdk.models.shared.BookingEngineIdResponseEnum bookingEngineId;
    public BookingBook200ApplicationJsonDataItemSummaries withBookingEngineId(openapisdk.models.shared.BookingEngineIdResponseEnum bookingEngineId) {
        this.bookingEngineId = bookingEngineId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingStatus")
    public openapisdk.models.shared.BookingStatusItem bookingStatus;
    public BookingBook200ApplicationJsonDataItemSummaries withBookingStatus(openapisdk.models.shared.BookingStatusItem bookingStatus) {
        this.bookingStatus = bookingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public BookingBook200ApplicationJsonDataItemSummaries withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departsFrom")
    public String departsFrom;
    public BookingBook200ApplicationJsonDataItemSummaries withDepartsFrom(String departsFrom) {
        this.departsFrom = departsFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departurePoint")
    public String departurePoint;
    public BookingBook200ApplicationJsonDataItemSummaries withDeparturePoint(String departurePoint) {
        this.departurePoint = departurePoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departurePointAddress")
    public String departurePointAddress;
    public BookingBook200ApplicationJsonDataItemSummaries withDeparturePointAddress(String departurePointAddress) {
        this.departurePointAddress = departurePointAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departurePointDirections")
    public String departurePointDirections;
    public BookingBook200ApplicationJsonDataItemSummaries withDeparturePointDirections(String departurePointDirections) {
        this.departurePointDirections = departurePointDirections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destId")
    public Long destId;
    public BookingBook200ApplicationJsonDataItemSummaries withDestId(Long destId) {
        this.destId = destId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributorItemRef")
    public String distributorItemRef;
    public BookingBook200ApplicationJsonDataItemSummaries withDistributorItemRef(String distributorItemRef) {
        this.distributorItemRef = distributorItemRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hoursConfirmed")
    public String hoursConfirmed;
    public BookingBook200ApplicationJsonDataItemSummaries withHoursConfirmed(String hoursConfirmed) {
        this.hoursConfirmed = hoursConfirmed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public Long itemId;
    public BookingBook200ApplicationJsonDataItemSummaries withItemId(Long itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itineraryId")
    public Long itineraryId;
    public BookingBook200ApplicationJsonDataItemSummaries withItineraryId(Long itineraryId) {
        this.itineraryId = itineraryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageServicesCode")
    public String languageServicesCode;
    public BookingBook200ApplicationJsonDataItemSummaries withLanguageServicesCode(String languageServicesCode) {
        this.languageServicesCode = languageServicesCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRetailPrice")
    public Double lastRetailPrice;
    public BookingBook200ApplicationJsonDataItemSummaries withLastRetailPrice(Double lastRetailPrice) {
        this.lastRetailPrice = lastRetailPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRetailPriceFormatted")
    public String lastRetailPriceFormatted;
    public BookingBook200ApplicationJsonDataItemSummaries withLastRetailPriceFormatted(String lastRetailPriceFormatted) {
        this.lastRetailPriceFormatted = lastRetailPriceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadTravellerFirstname")
    public String leadTravellerFirstname;
    public BookingBook200ApplicationJsonDataItemSummaries withLeadTravellerFirstname(String leadTravellerFirstname) {
        this.leadTravellerFirstname = leadTravellerFirstname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadTravellerSurname")
    public String leadTravellerSurname;
    public BookingBook200ApplicationJsonDataItemSummaries withLeadTravellerSurname(String leadTravellerSurname) {
        this.leadTravellerSurname = leadTravellerSurname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leadTravellerTitle")
    public String leadTravellerTitle;
    public BookingBook200ApplicationJsonDataItemSummaries withLeadTravellerTitle(String leadTravellerTitle) {
        this.leadTravellerTitle = leadTravellerTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantCancellable")
    public Boolean merchantCancellable;
    public BookingBook200ApplicationJsonDataItemSummaries withMerchantCancellable(Boolean merchantCancellable) {
        this.merchantCancellable = merchantCancellable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPrice")
    public Double merchantNetPrice;
    public BookingBook200ApplicationJsonDataItemSummaries withMerchantNetPrice(Double merchantNetPrice) {
        this.merchantNetPrice = merchantNetPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPriceFormatted")
    public String merchantNetPriceFormatted;
    public BookingBook200ApplicationJsonDataItemSummaries withMerchantNetPriceFormatted(String merchantNetPriceFormatted) {
        this.merchantNetPriceFormatted = merchantNetPriceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantTermsAndConditions")
    public BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions merchantTermsAndConditions;
    public BookingBook200ApplicationJsonDataItemSummaries withMerchantTermsAndConditions(BookingBook200ApplicationJsonDataItemSummariesMerchantTermsAndConditions merchantTermsAndConditions) {
        this.merchantTermsAndConditions = merchantTermsAndConditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obfsId")
    public Long obfsId;
    public BookingBook200ApplicationJsonDataItemSummaries withObfsId(Long obfsId) {
        this.obfsId = obfsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passbooks")
    public String passbooks;
    public BookingBook200ApplicationJsonDataItemSummaries withPassbooks(String passbooks) {
        this.passbooks = passbooks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupHotelId")
    public String pickupHotelId;
    public BookingBook200ApplicationJsonDataItemSummaries withPickupHotelId(String pickupHotelId) {
        this.pickupHotelId = pickupHotelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupHotelName")
    public String pickupHotelName;
    public BookingBook200ApplicationJsonDataItemSummaries withPickupHotelName(String pickupHotelName) {
        this.pickupHotelName = pickupHotelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public BookingBook200ApplicationJsonDataItemSummaries withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceFormatted")
    public String priceFormatted;
    public BookingBook200ApplicationJsonDataItemSummaries withPriceFormatted(String priceFormatted) {
        this.priceFormatted = priceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceUSD")
    public Double priceUSD;
    public BookingBook200ApplicationJsonDataItemSummaries withPriceUsd(Double priceUSD) {
        this.priceUSD = priceUSD;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public BookingBook200ApplicationJsonDataItemSummaries withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productPulledDown")
    public Boolean productPulledDown;
    public BookingBook200ApplicationJsonDataItemSummaries withProductPulledDown(Boolean productPulledDown) {
        this.productPulledDown = productPulledDown;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productTitle")
    public String productTitle;
    public BookingBook200ApplicationJsonDataItemSummaries withProductTitle(String productTitle) {
        this.productTitle = productTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productWidgetList")
    public String productWidgetList;
    public BookingBook200ApplicationJsonDataItemSummaries withProductWidgetList(String productWidgetList) {
        this.productWidgetList = productWidgetList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rulesApplied")
    public String rulesApplied;
    public BookingBook200ApplicationJsonDataItemSummaries withRulesApplied(String rulesApplied) {
        this.rulesApplied = rulesApplied;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingAmount")
    public String savingAmount;
    public BookingBook200ApplicationJsonDataItemSummaries withSavingAmount(String savingAmount) {
        this.savingAmount = savingAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingAmountFormated")
    public String savingAmountFormated;
    public BookingBook200ApplicationJsonDataItemSummaries withSavingAmountFormated(String savingAmountFormated) {
        this.savingAmountFormated = savingAmountFormated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingBook200ApplicationJsonDataItemSummaries withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startingTime")
    public String startingTime;
    public BookingBook200ApplicationJsonDataItemSummaries withStartingTime(String startingTime) {
        this.startingTime = startingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplierName")
    public String supplierName;
    public BookingBook200ApplicationJsonDataItemSummaries withSupplierName(String supplierName) {
        this.supplierName = supplierName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplierPhoneNumber")
    public String supplierPhoneNumber;
    public BookingBook200ApplicationJsonDataItemSummaries withSupplierPhoneNumber(String supplierPhoneNumber) {
        this.supplierPhoneNumber = supplierPhoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termsAndConditions")
    public java.util.Map<String, Object> termsAndConditions;
    public BookingBook200ApplicationJsonDataItemSummaries withTermsAndConditions(java.util.Map<String, Object> termsAndConditions) {
        this.termsAndConditions = termsAndConditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tourGradeCode")
    public String tourGradeCode;
    public BookingBook200ApplicationJsonDataItemSummaries withTourGradeCode(String tourGradeCode) {
        this.tourGradeCode = tourGradeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tourGradeDescription")
    public String tourGradeDescription;
    public BookingBook200ApplicationJsonDataItemSummaries withTourGradeDescription(String tourGradeDescription) {
        this.tourGradeDescription = tourGradeDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("travelDate")
    public String travelDate;
    public BookingBook200ApplicationJsonDataItemSummaries withTravelDate(String travelDate) {
        this.travelDate = travelDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("travellerAgeBands")
    public BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands[] travellerAgeBands;
    public BookingBook200ApplicationJsonDataItemSummaries withTravellerAgeBands(BookingBook200ApplicationJsonDataItemSummariesTravellerAgeBands[] travellerAgeBands) {
        this.travellerAgeBands = travellerAgeBands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherKey")
    public String voucherKey;
    public BookingBook200ApplicationJsonDataItemSummaries withVoucherKey(String voucherKey) {
        this.voucherKey = voucherKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherOption")
    public String voucherOption;
    public BookingBook200ApplicationJsonDataItemSummaries withVoucherOption(String voucherOption) {
        this.voucherOption = voucherOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherRequirements")
    public String voucherRequirements;
    public BookingBook200ApplicationJsonDataItemSummaries withVoucherRequirements(String voucherRequirements) {
        this.voucherRequirements = voucherRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherURL")
    public String voucherURL;
    public BookingBook200ApplicationJsonDataItemSummaries withVoucherUrl(String voucherURL) {
        this.voucherURL = voucherURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vouchers")
    public String vouchers;
    public BookingBook200ApplicationJsonDataItemSummaries withVouchers(String vouchers) {
        this.vouchers = vouchers;
        return this;
    }
}