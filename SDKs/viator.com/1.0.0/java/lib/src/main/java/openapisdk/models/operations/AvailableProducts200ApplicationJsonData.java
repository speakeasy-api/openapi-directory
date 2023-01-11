package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AvailableProducts200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admission")
    public String admission;
    public AvailableProducts200ApplicationJsonData withAdmission(String admission) {
        this.admission = admission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available")
    public Boolean available;
    public AvailableProducts200ApplicationJsonData withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingEngineId")
    public openapisdk.models.shared.BookingEngineIdEnum bookingEngineId;
    public AvailableProducts200ApplicationJsonData withBookingEngineId(openapisdk.models.shared.BookingEngineIdEnum bookingEngineId) {
        this.bookingEngineId = bookingEngineId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catIds")
    public Long[] catIds;
    public AvailableProducts200ApplicationJsonData withCatIds(Long[] catIds) {
        this.catIds = catIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public AvailableProducts200ApplicationJsonData withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public AvailableProducts200ApplicationJsonData withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public AvailableProducts200ApplicationJsonData withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("essential")
    public String essential;
    public AvailableProducts200ApplicationJsonData withEssential(String essential) {
        this.essential = essential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantCancellable")
    public Boolean merchantCancellable;
    public AvailableProducts200ApplicationJsonData withMerchantCancellable(Boolean merchantCancellable) {
        this.merchantCancellable = merchantCancellable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPriceFrom")
    public Double merchantNetPriceFrom;
    public AvailableProducts200ApplicationJsonData withMerchantNetPriceFrom(Double merchantNetPriceFrom) {
        this.merchantNetPriceFrom = merchantNetPriceFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPriceFromFormatted")
    public String merchantNetPriceFromFormatted;
    public AvailableProducts200ApplicationJsonData withMerchantNetPriceFromFormatted(String merchantNetPriceFromFormatted) {
        this.merchantNetPriceFromFormatted = merchantNetPriceFromFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onRequestPeriod")
    public Long onRequestPeriod;
    public AvailableProducts200ApplicationJsonData withOnRequestPeriod(Long onRequestPeriod) {
        this.onRequestPeriod = onRequestPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onSale")
    public Boolean onSale;
    public AvailableProducts200ApplicationJsonData withOnSale(Boolean onSale) {
        this.onSale = onSale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panoramaCount")
    public Long panoramaCount;
    public AvailableProducts200ApplicationJsonData withPanoramaCount(Long panoramaCount) {
        this.panoramaCount = panoramaCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pas")
    public AvailableProducts200ApplicationJsonDataPas pas;
    public AvailableProducts200ApplicationJsonData withPas(AvailableProducts200ApplicationJsonDataPas pas) {
        this.pas = pas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoCount")
    public Long photoCount;
    public AvailableProducts200ApplicationJsonData withPhotoCount(Long photoCount) {
        this.photoCount = photoCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public AvailableProducts200ApplicationJsonData withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceFormatted")
    public String priceFormatted;
    public AvailableProducts200ApplicationJsonData withPriceFormatted(String priceFormatted) {
        this.priceFormatted = priceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryDestinationId")
    public Long primaryDestinationId;
    public AvailableProducts200ApplicationJsonData withPrimaryDestinationId(Long primaryDestinationId) {
        this.primaryDestinationId = primaryDestinationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryDestinationName")
    public String primaryDestinationName;
    public AvailableProducts200ApplicationJsonData withPrimaryDestinationName(String primaryDestinationName) {
        this.primaryDestinationName = primaryDestinationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryDestinationUrlName")
    public String primaryDestinationUrlName;
    public AvailableProducts200ApplicationJsonData withPrimaryDestinationUrlName(String primaryDestinationUrlName) {
        this.primaryDestinationUrlName = primaryDestinationUrlName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryGroupId")
    public String primaryGroupId;
    public AvailableProducts200ApplicationJsonData withPrimaryGroupId(String primaryGroupId) {
        this.primaryGroupId = primaryGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productUrlName")
    public String productUrlName;
    public AvailableProducts200ApplicationJsonData withProductUrlName(String productUrlName) {
        this.productUrlName = productUrlName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public Double rating;
    public AvailableProducts200ApplicationJsonData withRating(Double rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewCount")
    public Long reviewCount;
    public AvailableProducts200ApplicationJsonData withReviewCount(Long reviewCount) {
        this.reviewCount = reviewCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rrp")
    public Long rrp;
    public AvailableProducts200ApplicationJsonData withRrp(Long rrp) {
        this.rrp = rrp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rrpFormatted")
    public String rrpFormatted;
    public AvailableProducts200ApplicationJsonData withRrpFormatted(String rrpFormatted) {
        this.rrpFormatted = rrpFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingAmount")
    public String savingAmount;
    public AvailableProducts200ApplicationJsonData withSavingAmount(String savingAmount) {
        this.savingAmount = savingAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingAmountFormated")
    public String savingAmountFormated;
    public AvailableProducts200ApplicationJsonData withSavingAmountFormated(String savingAmountFormated) {
        this.savingAmountFormated = savingAmountFormated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortDescription")
    public String shortDescription;
    public AvailableProducts200ApplicationJsonData withShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortTitle")
    public String shortTitle;
    public AvailableProducts200ApplicationJsonData withShortTitle(String shortTitle) {
        this.shortTitle = shortTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public AvailableProducts200ApplicationJsonData withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialOfferAvailable")
    public Boolean specialOfferAvailable;
    public AvailableProducts200ApplicationJsonData withSpecialOfferAvailable(Boolean specialOfferAvailable) {
        this.specialOfferAvailable = specialOfferAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialReservation")
    public Boolean specialReservation;
    public AvailableProducts200ApplicationJsonData withSpecialReservation(Boolean specialReservation) {
        this.specialReservation = specialReservation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialReservationDetails")
    public String specialReservationDetails;
    public AvailableProducts200ApplicationJsonData withSpecialReservationDetails(String specialReservationDetails) {
        this.specialReservationDetails = specialReservationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslSupported")
    public Boolean sslSupported;
    public AvailableProducts200ApplicationJsonData withSslSupported(Boolean sslSupported) {
        this.sslSupported = sslSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subCatIds")
    public Long[] subCatIds;
    public AvailableProducts200ApplicationJsonData withSubCatIds(Long[] subCatIds) {
        this.subCatIds = subCatIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplierCode")
    public String supplierCode;
    public AvailableProducts200ApplicationJsonData withSupplierCode(String supplierCode) {
        this.supplierCode = supplierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplierName")
    public String supplierName;
    public AvailableProducts200ApplicationJsonData withSupplierName(String supplierName) {
        this.supplierName = supplierName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailHiResURL")
    public String thumbnailHiResURL;
    public AvailableProducts200ApplicationJsonData withThumbnailHiResUrl(String thumbnailHiResURL) {
        this.thumbnailHiResURL = thumbnailHiResURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailURL")
    public String thumbnailURL;
    public AvailableProducts200ApplicationJsonData withThumbnailUrl(String thumbnailURL) {
        this.thumbnailURL = thumbnailURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public AvailableProducts200ApplicationJsonData withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translationLevel")
    public Long translationLevel;
    public AvailableProducts200ApplicationJsonData withTranslationLevel(Long translationLevel) {
        this.translationLevel = translationLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueShortDescription")
    public String uniqueShortDescription;
    public AvailableProducts200ApplicationJsonData withUniqueShortDescription(String uniqueShortDescription) {
        this.uniqueShortDescription = uniqueShortDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoCount")
    public Long videoCount;
    public AvailableProducts200ApplicationJsonData withVideoCount(Long videoCount) {
        this.videoCount = videoCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webURL")
    public String webURL;
    public AvailableProducts200ApplicationJsonData withWebUrl(String webURL) {
        this.webURL = webURL;
        return this;
    }
}