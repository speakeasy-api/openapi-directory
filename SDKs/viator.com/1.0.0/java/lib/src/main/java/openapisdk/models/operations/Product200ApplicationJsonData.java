package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Product200ApplicationJsonData
 * **object** containing product details
**/
public class Product200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalInfo")
    public String[] additionalInfo;
    public Product200ApplicationJsonData withAdditionalInfo(String[] additionalInfo) {
        this.additionalInfo = additionalInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admission")
    public String admission;
    public Product200ApplicationJsonData withAdmission(String admission) {
        this.admission = admission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageBands")
    public Product200ApplicationJsonDataAgeBands[] ageBands;
    public Product200ApplicationJsonData withAgeBands(Product200ApplicationJsonDataAgeBands[] ageBands) {
        this.ageBands = ageBands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allTravellerNamesRequired")
    public Boolean allTravellerNamesRequired;
    public Product200ApplicationJsonData withAllTravellerNamesRequired(Boolean allTravellerNamesRequired) {
        this.allTravellerNamesRequired = allTravellerNamesRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applePassSupported")
    public Boolean applePassSupported;
    public Product200ApplicationJsonData withApplePassSupported(Boolean applePassSupported) {
        this.applePassSupported = applePassSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("available")
    public Boolean available;
    public Product200ApplicationJsonData withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingEngineId")
    public openapisdk.models.shared.BookingEngineIdEnum bookingEngineId;
    public Product200ApplicationJsonData withBookingEngineId(openapisdk.models.shared.BookingEngineIdEnum bookingEngineId) {
        this.bookingEngineId = bookingEngineId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingQuestions")
    public Product200ApplicationJsonDataBookingQuestions[] bookingQuestions;
    public Product200ApplicationJsonData withBookingQuestions(Product200ApplicationJsonDataBookingQuestions[] bookingQuestions) {
        this.bookingQuestions = bookingQuestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("catIds")
    public Long[] catIds;
    public Product200ApplicationJsonData withCatIds(Long[] catIds) {
        this.catIds = catIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public Product200ApplicationJsonData withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public Product200ApplicationJsonData withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public Product200ApplicationJsonData withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public Product200ApplicationJsonData withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departurePoint")
    public String departurePoint;
    public Product200ApplicationJsonData withDeparturePoint(String departurePoint) {
        this.departurePoint = departurePoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departureTime")
    public String departureTime;
    public Product200ApplicationJsonData withDepartureTime(String departureTime) {
        this.departureTime = departureTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departureTimeComments")
    public String departureTimeComments;
    public Product200ApplicationJsonData withDepartureTimeComments(String departureTimeComments) {
        this.departureTimeComments = departureTimeComments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Product200ApplicationJsonData withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationId")
    public Long destinationId;
    public Product200ApplicationJsonData withDestinationId(Long destinationId) {
        this.destinationId = destinationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public Product200ApplicationJsonData withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("essential")
    public String essential;
    public Product200ApplicationJsonData withEssential(String essential) {
        this.essential = essential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclusions")
    public String[] exclusions;
    public Product200ApplicationJsonData withExclusions(String[] exclusions) {
        this.exclusions = exclusions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highlights")
    public Long highlights;
    public Product200ApplicationJsonData withHighlights(Long highlights) {
        this.highlights = highlights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hotelPickup")
    public Boolean hotelPickup;
    public Product200ApplicationJsonData withHotelPickup(Boolean hotelPickup) {
        this.hotelPickup = hotelPickup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inclusions")
    public String[] inclusions;
    public Product200ApplicationJsonData withInclusions(String[] inclusions) {
        this.inclusions = inclusions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itinerary")
    public String itinerary;
    public Product200ApplicationJsonData withItinerary(String itinerary) {
        this.itinerary = itinerary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public Product200ApplicationJsonData withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mapURL")
    public String mapURL;
    public Product200ApplicationJsonData withMapUrl(String mapURL) {
        this.mapURL = mapURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxTravellerCount")
    public Long maxTravellerCount;
    public Product200ApplicationJsonData withMaxTravellerCount(Long maxTravellerCount) {
        this.maxTravellerCount = maxTravellerCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantCancellable")
    public Boolean merchantCancellable;
    public Product200ApplicationJsonData withMerchantCancellable(Boolean merchantCancellable) {
        this.merchantCancellable = merchantCancellable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPriceFrom")
    public Double merchantNetPriceFrom;
    public Product200ApplicationJsonData withMerchantNetPriceFrom(Double merchantNetPriceFrom) {
        this.merchantNetPriceFrom = merchantNetPriceFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantNetPriceFromFormatted")
    public String merchantNetPriceFromFormatted;
    public Product200ApplicationJsonData withMerchantNetPriceFromFormatted(String merchantNetPriceFromFormatted) {
        this.merchantNetPriceFromFormatted = merchantNetPriceFromFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantTermsAndConditions")
    public Product200ApplicationJsonDataMerchantTermsAndConditions merchantTermsAndConditions;
    public Product200ApplicationJsonData withMerchantTermsAndConditions(Product200ApplicationJsonDataMerchantTermsAndConditions merchantTermsAndConditions) {
        this.merchantTermsAndConditions = merchantTermsAndConditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onRequestPeriod")
    public Long onRequestPeriod;
    public Product200ApplicationJsonData withOnRequestPeriod(Long onRequestPeriod) {
        this.onRequestPeriod = onRequestPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onSale")
    public Boolean onSale;
    public Product200ApplicationJsonData withOnSale(Boolean onSale) {
        this.onSale = onSale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operates")
    public String operates;
    public Product200ApplicationJsonData withOperates(String operates) {
        this.operates = operates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panoramaCount")
    public Long panoramaCount;
    public Product200ApplicationJsonData withPanoramaCount(Long panoramaCount) {
        this.panoramaCount = panoramaCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pas")
    public java.util.Map<String, Object> pas;
    public Product200ApplicationJsonData withPas(java.util.Map<String, Object> pas) {
        this.pas = pas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passengerAttributes")
    public Product200ApplicationJsonDataPassengerAttributes[] passengerAttributes;
    public Product200ApplicationJsonData withPassengerAttributes(Product200ApplicationJsonDataPassengerAttributes[] passengerAttributes) {
        this.passengerAttributes = passengerAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photoCount")
    public Long photoCount;
    public Product200ApplicationJsonData withPhotoCount(Long photoCount) {
        this.photoCount = photoCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public Product200ApplicationJsonData withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceFormatted")
    public String priceFormatted;
    public Product200ApplicationJsonData withPriceFormatted(String priceFormatted) {
        this.priceFormatted = priceFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryDestinationId")
    public Long primaryDestinationId;
    public Product200ApplicationJsonData withPrimaryDestinationId(Long primaryDestinationId) {
        this.primaryDestinationId = primaryDestinationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryDestinationName")
    public String primaryDestinationName;
    public Product200ApplicationJsonData withPrimaryDestinationName(String primaryDestinationName) {
        this.primaryDestinationName = primaryDestinationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryDestinationUrlName")
    public String primaryDestinationUrlName;
    public Product200ApplicationJsonData withPrimaryDestinationUrlName(String primaryDestinationUrlName) {
        this.primaryDestinationUrlName = primaryDestinationUrlName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryGroupId")
    public String primaryGroupId;
    public Product200ApplicationJsonData withPrimaryGroupId(String primaryGroupId) {
        this.primaryGroupId = primaryGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productPhotos")
    public Product200ApplicationJsonDataProductPhotos[] productPhotos;
    public Product200ApplicationJsonData withProductPhotos(Product200ApplicationJsonDataProductPhotos[] productPhotos) {
        this.productPhotos = productPhotos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productUrlName")
    public String productUrlName;
    public Product200ApplicationJsonData withProductUrlName(String productUrlName) {
        this.productUrlName = productUrlName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public Double rating;
    public Product200ApplicationJsonData withRating(Double rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratingCounts")
    public openapisdk.models.shared.RatingCounts ratingCounts;
    public Product200ApplicationJsonData withRatingCounts(openapisdk.models.shared.RatingCounts ratingCounts) {
        this.ratingCounts = ratingCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public Product200ApplicationJsonData withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnDetails")
    public String returnDetails;
    public Product200ApplicationJsonData withReturnDetails(String returnDetails) {
        this.returnDetails = returnDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewCount")
    public Long reviewCount;
    public Product200ApplicationJsonData withReviewCount(Long reviewCount) {
        this.reviewCount = reviewCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviews")
    public openapisdk.models.shared.ReviewObject[] reviews;
    public Product200ApplicationJsonData withReviews(openapisdk.models.shared.ReviewObject[] reviews) {
        this.reviews = reviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rrp")
    public Long rrp;
    public Product200ApplicationJsonData withRrp(Long rrp) {
        this.rrp = rrp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rrpFormatted")
    public String rrpFormatted;
    public Product200ApplicationJsonData withRrpFormatted(String rrpFormatted) {
        this.rrpFormatted = rrpFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salesPoints")
    public String[] salesPoints;
    public Product200ApplicationJsonData withSalesPoints(String[] salesPoints) {
        this.salesPoints = salesPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingAmount")
    public String savingAmount;
    public Product200ApplicationJsonData withSavingAmount(String savingAmount) {
        this.savingAmount = savingAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("savingAmountFormated")
    public String savingAmountFormated;
    public Product200ApplicationJsonData withSavingAmountFormated(String savingAmountFormated) {
        this.savingAmountFormated = savingAmountFormated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortDescription")
    public String shortDescription;
    public Product200ApplicationJsonData withShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortTitle")
    public String shortTitle;
    public Product200ApplicationJsonData withShortTitle(String shortTitle) {
        this.shortTitle = shortTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialOffer")
    public String specialOffer;
    public Product200ApplicationJsonData withSpecialOffer(String specialOffer) {
        this.specialOffer = specialOffer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialOfferAvailable")
    public Boolean specialOfferAvailable;
    public Product200ApplicationJsonData withSpecialOfferAvailable(Boolean specialOfferAvailable) {
        this.specialOfferAvailable = specialOfferAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialReservation")
    public Boolean specialReservation;
    public Product200ApplicationJsonData withSpecialReservation(Boolean specialReservation) {
        this.specialReservation = specialReservation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialReservationDetails")
    public String specialReservationDetails;
    public Product200ApplicationJsonData withSpecialReservationDetails(String specialReservationDetails) {
        this.specialReservationDetails = specialReservationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslSupported")
    public Boolean sslSupported;
    public Product200ApplicationJsonData withSslSupported(Boolean sslSupported) {
        this.sslSupported = sslSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subCatIds")
    public Long[] subCatIds;
    public Product200ApplicationJsonData withSubCatIds(Long[] subCatIds) {
        this.subCatIds = subCatIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplierCode")
    public String supplierCode;
    public Product200ApplicationJsonData withSupplierCode(String supplierCode) {
        this.supplierCode = supplierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplierName")
    public String supplierName;
    public Product200ApplicationJsonData withSupplierName(String supplierName) {
        this.supplierName = supplierName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailHiResURL")
    public String thumbnailHiResURL;
    public Product200ApplicationJsonData withThumbnailHiResUrl(String thumbnailHiResURL) {
        this.thumbnailHiResURL = thumbnailHiResURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailURL")
    public String thumbnailURL;
    public Product200ApplicationJsonData withThumbnailUrl(String thumbnailURL) {
        this.thumbnailURL = thumbnailURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Product200ApplicationJsonData withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tourGrades")
    public Product200ApplicationJsonDataTourGrades[] tourGrades;
    public Product200ApplicationJsonData withTourGrades(Product200ApplicationJsonDataTourGrades[] tourGrades) {
        this.tourGrades = tourGrades;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tourGradesAvailable")
    public Boolean tourGradesAvailable;
    public Product200ApplicationJsonData withTourGradesAvailable(Boolean tourGradesAvailable) {
        this.tourGradesAvailable = tourGradesAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("translationLevel")
    public Long translationLevel;
    public Product200ApplicationJsonData withTranslationLevel(Long translationLevel) {
        this.translationLevel = translationLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userPhotos")
    public openapisdk.models.shared.PhotoObject[] userPhotos;
    public Product200ApplicationJsonData withUserPhotos(openapisdk.models.shared.PhotoObject[] userPhotos) {
        this.userPhotos = userPhotos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoCount")
    public Long videoCount;
    public Product200ApplicationJsonData withVideoCount(Long videoCount) {
        this.videoCount = videoCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videos")
    public String videos;
    public Product200ApplicationJsonData withVideos(String videos) {
        this.videos = videos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherOption")
    public String voucherOption;
    public Product200ApplicationJsonData withVoucherOption(String voucherOption) {
        this.voucherOption = voucherOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucherRequirements")
    public Object voucherRequirements;
    public Product200ApplicationJsonData withVoucherRequirements(Object voucherRequirements) {
        this.voucherRequirements = voucherRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webURL")
    public String webURL;
    public Product200ApplicationJsonData withWebUrl(String webURL) {
        this.webURL = webURL;
        return this;
    }
}