package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchProductsCodes200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admission")
    public String admission;
    public SearchProductsCodes200ApplicationJsonData withAdmission(String admission) {
        this.admission = admission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingEngineId")
    public openapisdk.models.shared.BookingEngineIdEnum bookingEngineId;
    public SearchProductsCodes200ApplicationJsonData withBookingEngineId(openapisdk.models.shared.BookingEngineIdEnum bookingEngineId) {
        this.bookingEngineId = bookingEngineId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catIds")
    public Long[] catIds;
    public SearchProductsCodes200ApplicationJsonData withCatIds(Long[] catIds) {
        this.catIds = catIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public SearchProductsCodes200ApplicationJsonData withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public SearchProductsCodes200ApplicationJsonData withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public SearchProductsCodes200ApplicationJsonData withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("essential")
    public String essential;
    public SearchProductsCodes200ApplicationJsonData withEssential(String essential) {
        this.essential = essential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantCancellable")
    public Boolean merchantCancellable;
    public SearchProductsCodes200ApplicationJsonData withMerchantCancellable(Boolean merchantCancellable) {
        this.merchantCancellable = merchantCancellable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPriceFrom")
    public Double merchantNetPriceFrom;
    public SearchProductsCodes200ApplicationJsonData withMerchantNetPriceFrom(Double merchantNetPriceFrom) {
        this.merchantNetPriceFrom = merchantNetPriceFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPriceFromFormatted")
    public String merchantNetPriceFromFormatted;
    public SearchProductsCodes200ApplicationJsonData withMerchantNetPriceFromFormatted(String merchantNetPriceFromFormatted) {
        this.merchantNetPriceFromFormatted = merchantNetPriceFromFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onRequestPeriod")
    public Long onRequestPeriod;
    public SearchProductsCodes200ApplicationJsonData withOnRequestPeriod(Long onRequestPeriod) {
        this.onRequestPeriod = onRequestPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onSale")
    public Boolean onSale;
    public SearchProductsCodes200ApplicationJsonData withOnSale(Boolean onSale) {
        this.onSale = onSale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panoramaCount")
    public Long panoramaCount;
    public SearchProductsCodes200ApplicationJsonData withPanoramaCount(Long panoramaCount) {
        this.panoramaCount = panoramaCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pas")
    public java.util.Map<String, Object> pas;
    public SearchProductsCodes200ApplicationJsonData withPas(java.util.Map<String, Object> pas) {
        this.pas = pas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoCount")
    public Long photoCount;
    public SearchProductsCodes200ApplicationJsonData withPhotoCount(Long photoCount) {
        this.photoCount = photoCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public SearchProductsCodes200ApplicationJsonData withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceFormatted")
    public String priceFormatted;
    public SearchProductsCodes200ApplicationJsonData withPriceFormatted(String priceFormatted) {
        this.priceFormatted = priceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryDestinationId")
    public Long primaryDestinationId;
    public SearchProductsCodes200ApplicationJsonData withPrimaryDestinationId(Long primaryDestinationId) {
        this.primaryDestinationId = primaryDestinationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryDestinationName")
    public String primaryDestinationName;
    public SearchProductsCodes200ApplicationJsonData withPrimaryDestinationName(String primaryDestinationName) {
        this.primaryDestinationName = primaryDestinationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryGroupId")
    public String primaryGroupId;
    public SearchProductsCodes200ApplicationJsonData withPrimaryGroupId(String primaryGroupId) {
        this.primaryGroupId = primaryGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public Double rating;
    public SearchProductsCodes200ApplicationJsonData withRating(Double rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewCount")
    public Long reviewCount;
    public SearchProductsCodes200ApplicationJsonData withReviewCount(Long reviewCount) {
        this.reviewCount = reviewCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rrp")
    public Long rrp;
    public SearchProductsCodes200ApplicationJsonData withRrp(Long rrp) {
        this.rrp = rrp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rrpformatted")
    public String rrpformatted;
    public SearchProductsCodes200ApplicationJsonData withRrpformatted(String rrpformatted) {
        this.rrpformatted = rrpformatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingAmount")
    public String savingAmount;
    public SearchProductsCodes200ApplicationJsonData withSavingAmount(String savingAmount) {
        this.savingAmount = savingAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingAmountFormated")
    public String savingAmountFormated;
    public SearchProductsCodes200ApplicationJsonData withSavingAmountFormated(String savingAmountFormated) {
        this.savingAmountFormated = savingAmountFormated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortDescription")
    public String shortDescription;
    public SearchProductsCodes200ApplicationJsonData withShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortTitle")
    public String shortTitle;
    public SearchProductsCodes200ApplicationJsonData withShortTitle(String shortTitle) {
        this.shortTitle = shortTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public SearchProductsCodes200ApplicationJsonData withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialOfferAvailable")
    public Boolean specialOfferAvailable;
    public SearchProductsCodes200ApplicationJsonData withSpecialOfferAvailable(Boolean specialOfferAvailable) {
        this.specialOfferAvailable = specialOfferAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialReservation")
    public Boolean specialReservation;
    public SearchProductsCodes200ApplicationJsonData withSpecialReservation(Boolean specialReservation) {
        this.specialReservation = specialReservation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialReservationDetails")
    public String specialReservationDetails;
    public SearchProductsCodes200ApplicationJsonData withSpecialReservationDetails(String specialReservationDetails) {
        this.specialReservationDetails = specialReservationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subCatIds")
    public Long[] subCatIds;
    public SearchProductsCodes200ApplicationJsonData withSubCatIds(Long[] subCatIds) {
        this.subCatIds = subCatIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplierCode")
    public String supplierCode;
    public SearchProductsCodes200ApplicationJsonData withSupplierCode(String supplierCode) {
        this.supplierCode = supplierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplierName")
    public String supplierName;
    public SearchProductsCodes200ApplicationJsonData withSupplierName(String supplierName) {
        this.supplierName = supplierName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailHiResURL")
    public String thumbnailHiResURL;
    public SearchProductsCodes200ApplicationJsonData withThumbnailHiResUrl(String thumbnailHiResURL) {
        this.thumbnailHiResURL = thumbnailHiResURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailURL")
    public String thumbnailURL;
    public SearchProductsCodes200ApplicationJsonData withThumbnailUrl(String thumbnailURL) {
        this.thumbnailURL = thumbnailURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public SearchProductsCodes200ApplicationJsonData withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translationLevel")
    public Long translationLevel;
    public SearchProductsCodes200ApplicationJsonData withTranslationLevel(Long translationLevel) {
        this.translationLevel = translationLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueShortDescription")
    public String uniqueShortDescription;
    public SearchProductsCodes200ApplicationJsonData withUniqueShortDescription(String uniqueShortDescription) {
        this.uniqueShortDescription = uniqueShortDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoCount")
    public Long videoCount;
    public SearchProductsCodes200ApplicationJsonData withVideoCount(Long videoCount) {
        this.videoCount = videoCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webURL")
    public String webURL;
    public SearchProductsCodes200ApplicationJsonData withWebUrl(String webURL) {
        this.webURL = webURL;
        return this;
    }
}