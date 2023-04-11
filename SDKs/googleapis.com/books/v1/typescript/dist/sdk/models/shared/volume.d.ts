import { SpeakeasyBase } from "../../../internal/utils";
import { DownloadAccessRestriction } from "./downloadaccessrestriction";
import { ReadingPosition } from "./readingposition";
import { Review } from "./review";
import { Volumeseriesinfo } from "./volumeseriesinfo";
/**
 * Information about epub content. (In LITE projection.)
 */
export declare class VolumeAccessInfoEpub extends SpeakeasyBase {
    /**
     * URL to retrieve ACS token for epub download. (In LITE projection.)
     */
    acsTokenLink?: string;
    /**
     * URL to download epub. (In LITE projection.)
     */
    downloadLink?: string;
    /**
     * Is a flowing text epub available either as public domain or for purchase. (In LITE projection.)
     */
    isAvailable?: boolean;
}
/**
 * Information about pdf content. (In LITE projection.)
 */
export declare class VolumeAccessInfoPdf extends SpeakeasyBase {
    /**
     * URL to retrieve ACS token for pdf download. (In LITE projection.)
     */
    acsTokenLink?: string;
    /**
     * URL to download pdf. (In LITE projection.)
     */
    downloadLink?: string;
    /**
     * Is a scanned image pdf available either as public domain or for purchase. (In LITE projection.)
     */
    isAvailable?: boolean;
}
/**
 * Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).
 */
export declare class VolumeAccessInfo extends SpeakeasyBase {
    /**
     * Combines the access and viewability of this volume into a single status field for this user. Values can be FULL_PURCHASED, FULL_PUBLIC_DOMAIN, SAMPLE or NONE. (In LITE projection.)
     */
    accessViewStatus?: string;
    /**
     * The two-letter ISO_3166-1 country code for which this access information is valid. (In LITE projection.)
     */
    country?: string;
    downloadAccess?: DownloadAccessRestriction;
    /**
     * URL to the Google Drive viewer if this volume is uploaded by the user by selecting the file from Google Drive.
     */
    driveImportedContentLink?: string;
    /**
     * Whether this volume can be embedded in a viewport using the Embedded Viewer API.
     */
    embeddable?: boolean;
    /**
     * Information about epub content. (In LITE projection.)
     */
    epub?: VolumeAccessInfoEpub;
    /**
     * Whether this volume requires that the client explicitly request offline download license rather than have it done automatically when loading the content, if the client supports it.
     */
    explicitOfflineLicenseManagement?: boolean;
    /**
     * Information about pdf content. (In LITE projection.)
     */
    pdf?: VolumeAccessInfoPdf;
    /**
     * Whether or not this book is public domain in the country listed above.
     */
    publicDomain?: boolean;
    /**
     * Whether quote sharing is allowed for this volume.
     */
    quoteSharingAllowed?: boolean;
    /**
     * Whether text-to-speech is permitted for this volume. Values can be ALLOWED, ALLOWED_FOR_ACCESSIBILITY, or NOT_ALLOWED.
     */
    textToSpeechPermission?: string;
    /**
     * For ordered but not yet processed orders, we give a URL that can be used to go to the appropriate Google Wallet page.
     */
    viewOrderUrl?: string;
    /**
     * The read access of a volume. Possible values are PARTIAL, ALL_PAGES, NO_PAGES or UNKNOWN. This value depends on the country listed above. A value of PARTIAL means that the publisher has allowed some portion of the volume to be viewed publicly, without purchase. This can apply to eBooks as well as non-eBooks. Public domain books will always have a value of ALL_PAGES.
     */
    viewability?: string;
    /**
     * URL to read this volume on the Google Books site. Link will not allow users to read non-viewable volumes.
     */
    webReaderLink?: string;
}
export declare class VolumeLayerInfoLayers extends SpeakeasyBase {
    /**
     * The layer id of this layer (e.g. "geo").
     */
    layerId?: string;
    /**
     * The current version of this layer's volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately.
     */
    volumeAnnotationsVersion?: string;
}
/**
 * What layers exist in this volume and high level information about them.
 */
export declare class VolumeLayerInfo extends SpeakeasyBase {
    /**
     * A layer should appear here if and only if the layer exists for this book.
     */
    layers?: VolumeLayerInfoLayers[];
}
/**
 * Recommendation related information for this volume.
 */
export declare class VolumeRecommendedInfo extends SpeakeasyBase {
    /**
     * A text explaining why this volume is recommended.
     */
    explanation?: string;
}
/**
 * Suggested retail price. (In LITE projection.)
 */
export declare class VolumeSaleInfoListPrice extends SpeakeasyBase {
    /**
     * Amount in the currency listed below. (In LITE projection.)
     */
    amount?: number;
    /**
     * An ISO 4217, three-letter currency code. (In LITE projection.)
     */
    currencyCode?: string;
}
/**
 * Offer list (=undiscounted) price in Micros.
 */
export declare class VolumeSaleInfoOffersListPrice extends SpeakeasyBase {
    amountInMicros?: number;
    currencyCode?: string;
}
/**
 * The rental duration (for rental offers only).
 */
export declare class VolumeSaleInfoOffersRentalDuration extends SpeakeasyBase {
    count?: number;
    unit?: string;
}
/**
 * Offer retail (=discounted) price in Micros
 */
export declare class VolumeSaleInfoOffersRetailPrice extends SpeakeasyBase {
    amountInMicros?: number;
    currencyCode?: string;
}
export declare class VolumeSaleInfoOffers extends SpeakeasyBase {
    /**
     * The finsky offer type (e.g., PURCHASE=0 RENTAL=3)
     */
    finskyOfferType?: number;
    /**
     * Indicates whether the offer is giftable.
     */
    giftable?: boolean;
    /**
     * Offer list (=undiscounted) price in Micros.
     */
    listPrice?: VolumeSaleInfoOffersListPrice;
    /**
     * The rental duration (for rental offers only).
     */
    rentalDuration?: VolumeSaleInfoOffersRentalDuration;
    /**
     * Offer retail (=discounted) price in Micros
     */
    retailPrice?: VolumeSaleInfoOffersRetailPrice;
}
/**
 * The actual selling price of the book. This is the same as the suggested retail or list price unless there are offers or discounts on this volume. (In LITE projection.)
 */
export declare class VolumeSaleInfoRetailPrice extends SpeakeasyBase {
    /**
     * Amount in the currency listed below. (In LITE projection.)
     */
    amount?: number;
    /**
     * An ISO 4217, three-letter currency code. (In LITE projection.)
     */
    currencyCode?: string;
}
/**
 * Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).
 */
export declare class VolumeSaleInfo extends SpeakeasyBase {
    /**
     * URL to purchase this volume on the Google Books site. (In LITE projection)
     */
    buyLink?: string;
    /**
     * The two-letter ISO_3166-1 country code for which this sale information is valid. (In LITE projection.)
     */
    country?: string;
    /**
     * Whether or not this volume is an eBook (can be added to the My eBooks shelf).
     */
    isEbook?: boolean;
    /**
     * Suggested retail price. (In LITE projection.)
     */
    listPrice?: VolumeSaleInfoListPrice;
    /**
     * Offers available for this volume (sales and rentals).
     */
    offers?: VolumeSaleInfoOffers[];
    /**
     * The date on which this book is available for sale.
     */
    onSaleDate?: string;
    /**
     * The actual selling price of the book. This is the same as the suggested retail or list price unless there are offers or discounts on this volume. (In LITE projection.)
     */
    retailPrice?: VolumeSaleInfoRetailPrice;
    /**
     * Whether or not this book is available for sale or offered for free in the Google eBookstore for the country listed above. Possible values are FOR_SALE, FOR_RENTAL_ONLY, FOR_SALE_AND_RENTAL, FREE, NOT_FOR_SALE, or FOR_PREORDER.
     */
    saleability?: string;
}
/**
 * Search result information related to this volume.
 */
export declare class VolumeSearchInfo extends SpeakeasyBase {
    /**
     * A text snippet containing the search query.
     */
    textSnippet?: string;
}
/**
 * Copy/Paste accounting information.
 */
export declare class VolumeUserInfoCopy extends SpeakeasyBase {
    allowedCharacterCount?: number;
    limitType?: string;
    remainingCharacterCount?: number;
    updated?: string;
}
/**
 * Information on the ability to share with the family.
 */
export declare class VolumeUserInfoFamilySharing extends SpeakeasyBase {
    /**
     * The role of the user in the family.
     */
    familyRole?: string;
    /**
     * Whether or not this volume can be shared with the family by the user. This includes sharing eligibility of both the volume and the user. If the value is true, the user can initiate a family sharing action.
     */
    isSharingAllowed?: boolean;
    /**
     * Whether or not sharing this volume is temporarily disabled due to issues with the Family Wallet.
     */
    isSharingDisabledByFop?: boolean;
}
/**
 * Period during this book is/was a valid rental.
 */
export declare class VolumeUserInfoRentalPeriod extends SpeakeasyBase {
    endUtcSec?: string;
    startUtcSec?: string;
}
export declare class VolumeUserInfoUserUploadedVolumeInfo extends SpeakeasyBase {
    processingState?: string;
}
/**
 * User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)
 */
export declare class VolumeUserInfo extends SpeakeasyBase {
    /**
     * Timestamp when this volume was acquired by the user. (RFC 3339 UTC date-time format) Acquiring includes purchase, user upload, receiving family sharing, etc.
     */
    acquiredTime?: string;
    /**
     * How this volume was acquired.
     */
    acquisitionType?: number;
    /**
     * Copy/Paste accounting information.
     */
    copy?: VolumeUserInfoCopy;
    /**
     * Whether this volume is purchased, sample, pd download etc.
     */
    entitlementType?: number;
    /**
     * Information on the ability to share with the family.
     */
    familySharing?: VolumeUserInfoFamilySharing;
    /**
     * Whether or not the user shared this volume with the family.
     */
    isFamilySharedFromUser?: boolean;
    /**
     * Whether or not the user received this volume through family sharing.
     */
    isFamilySharedToUser?: boolean;
    /**
     * Deprecated: Replaced by familySharing.
     */
    isFamilySharingAllowed?: boolean;
    /**
     * Deprecated: Replaced by familySharing.
     */
    isFamilySharingDisabledByFop?: boolean;
    /**
     * Whether or not this volume is currently in "my books."
     */
    isInMyBooks?: boolean;
    /**
     * Whether or not this volume was pre-ordered by the authenticated user making the request. (In LITE projection.)
     */
    isPreordered?: boolean;
    /**
     * Whether or not this volume was purchased by the authenticated user making the request. (In LITE projection.)
     */
    isPurchased?: boolean;
    /**
     * Whether or not this volume was user uploaded.
     */
    isUploaded?: boolean;
    readingPosition?: ReadingPosition;
    /**
     * Period during this book is/was a valid rental.
     */
    rentalPeriod?: VolumeUserInfoRentalPeriod;
    /**
     * Whether this book is an active or an expired rental.
     */
    rentalState?: string;
    review?: Review;
    /**
     * Timestamp when this volume was last modified by a user action, such as a reading position update, volume purchase or writing a review. (RFC 3339 UTC date-time format).
     */
    updated?: string;
    userUploadedVolumeInfo?: VolumeUserInfoUserUploadedVolumeInfo;
}
/**
 * Physical dimensions of this volume.
 */
export declare class VolumeVolumeInfoDimensions extends SpeakeasyBase {
    /**
     * Height or length of this volume (in cm).
     */
    height?: string;
    /**
     * Thickness of this volume (in cm).
     */
    thickness?: string;
    /**
     * Width of this volume (in cm).
     */
    width?: string;
}
/**
 * A list of image links for all the sizes that are available. (In LITE projection.)
 */
export declare class VolumeVolumeInfoImageLinks extends SpeakeasyBase {
    /**
     * Image link for extra large size (width of ~1280 pixels). (In LITE projection)
     */
    extraLarge?: string;
    /**
     * Image link for large size (width of ~800 pixels). (In LITE projection)
     */
    large?: string;
    /**
     * Image link for medium size (width of ~575 pixels). (In LITE projection)
     */
    medium?: string;
    /**
     * Image link for small size (width of ~300 pixels). (In LITE projection)
     */
    small?: string;
    /**
     * Image link for small thumbnail size (width of ~80 pixels). (In LITE projection)
     */
    smallThumbnail?: string;
    /**
     * Image link for thumbnail size (width of ~128 pixels). (In LITE projection)
     */
    thumbnail?: string;
}
export declare class VolumeVolumeInfoIndustryIdentifiers extends SpeakeasyBase {
    /**
     * Industry specific volume identifier.
     */
    identifier?: string;
    /**
     * Identifier type. Possible values are ISBN_10, ISBN_13, ISSN and OTHER.
     */
    type?: string;
}
/**
 * A top-level summary of the panelization info in this volume.
 */
export declare class VolumeVolumeInfoPanelizationSummary extends SpeakeasyBase {
    containsEpubBubbles?: boolean;
    containsImageBubbles?: boolean;
    epubBubbleVersion?: string;
    imageBubbleVersion?: string;
}
/**
 * The reading modes available for this volume.
 */
export declare class VolumeVolumeInfoReadingModes extends SpeakeasyBase {
    image?: boolean;
    text?: boolean;
}
/**
 * General volume information.
 */
export declare class VolumeVolumeInfo extends SpeakeasyBase {
    /**
     * Whether anonymous logging should be allowed.
     */
    allowAnonLogging?: boolean;
    /**
     * The names of the authors and/or editors for this volume. (In LITE projection)
     */
    authors?: string[];
    /**
     * The mean review rating for this volume. (min = 1.0, max = 5.0)
     */
    averageRating?: number;
    /**
     * Canonical URL for a volume. (In LITE projection.)
     */
    canonicalVolumeLink?: string;
    /**
     * A list of subject categories, such as "Fiction", "Suspense", etc.
     */
    categories?: string[];
    /**
     * Whether the volume has comics content.
     */
    comicsContent?: boolean;
    /**
     * An identifier for the version of the volume content (text & images). (In LITE projection)
     */
    contentVersion?: string;
    /**
     * A synopsis of the volume. The text of the description is formatted in HTML and includes simple formatting elements, such as b, i, and br tags. (In LITE projection.)
     */
    description?: string;
    /**
     * Physical dimensions of this volume.
     */
    dimensions?: VolumeVolumeInfoDimensions;
    /**
     * A list of image links for all the sizes that are available. (In LITE projection.)
     */
    imageLinks?: VolumeVolumeInfoImageLinks;
    /**
     * Industry standard identifiers for this volume.
     */
    industryIdentifiers?: VolumeVolumeInfoIndustryIdentifiers[];
    /**
     * URL to view information about this volume on the Google Books site. (In LITE projection)
     */
    infoLink?: string;
    /**
     * Best language for this volume (based on content). It is the two-letter ISO 639-1 code such as 'fr', 'en', etc.
     */
    language?: string;
    /**
     * The main category to which this volume belongs. It will be the category from the categories list returned below that has the highest weight.
     */
    mainCategory?: string;
    maturityRating?: string;
    /**
     * Total number of pages as per publisher metadata.
     */
    pageCount?: number;
    /**
     * A top-level summary of the panelization info in this volume.
     */
    panelizationSummary?: VolumeVolumeInfoPanelizationSummary;
    /**
     * URL to preview this volume on the Google Books site.
     */
    previewLink?: string;
    /**
     * Type of publication of this volume. Possible values are BOOK or MAGAZINE.
     */
    printType?: string;
    /**
     * Total number of printed pages in generated pdf representation.
     */
    printedPageCount?: number;
    /**
     * Date of publication. (In LITE projection.)
     */
    publishedDate?: string;
    /**
     * Publisher of this volume. (In LITE projection.)
     */
    publisher?: string;
    /**
     * The number of review ratings for this volume.
     */
    ratingsCount?: number;
    /**
     * The reading modes available for this volume.
     */
    readingModes?: VolumeVolumeInfoReadingModes;
    /**
     * Total number of sample pages as per publisher metadata.
     */
    samplePageCount?: number;
    seriesInfo?: Volumeseriesinfo;
    /**
     * Volume subtitle. (In LITE projection.)
     */
    subtitle?: string;
    /**
     * Volume title. (In LITE projection.)
     */
    title?: string;
}
/**
 * Successful response
 */
export declare class Volume extends SpeakeasyBase {
    /**
     * Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).
     */
    accessInfo?: VolumeAccessInfo;
    /**
     * Opaque identifier for a specific version of a volume resource. (In LITE projection)
     */
    etag?: string;
    /**
     * Unique identifier for a volume. (In LITE projection.)
     */
    id?: string;
    /**
     * Resource type for a volume. (In LITE projection.)
     */
    kind?: string;
    /**
     * What layers exist in this volume and high level information about them.
     */
    layerInfo?: VolumeLayerInfo;
    /**
     * Recommendation related information for this volume.
     */
    recommendedInfo?: VolumeRecommendedInfo;
    /**
     * Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).
     */
    saleInfo?: VolumeSaleInfo;
    /**
     * Search result information related to this volume.
     */
    searchInfo?: VolumeSearchInfo;
    /**
     * URL to this resource. (In LITE projection.)
     */
    selfLink?: string;
    /**
     * User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)
     */
    userInfo?: VolumeUserInfo;
    /**
     * General volume information.
     */
    volumeInfo?: VolumeVolumeInfo;
}
